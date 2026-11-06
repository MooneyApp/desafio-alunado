import { test } from "node:test";
import assert from "node:assert/strict";
import { sincronizar } from "../src/sincronizar.js";
import { TABELA } from "../src/gravar.js";
import { criarBancoDeMentira } from "../src/banco-de-mentira.js";
import { buscarLinhasDeExemplo } from "../src/fonte-de-exemplo.js";

test("sincroniza os dados de exemplo do começo ao fim", async () => {
  const banco = criarBancoDeMentira();
  const resumo = await sincronizar({ buscarLinhas: buscarLinhasDeExemplo, banco, mes: "2026-11" });
  assert.deepEqual(resumo, {
    mes: "2026-11",
    gravados: 3,
    ignoradas: ["Escola Sem Cadastro", "Escola Cnpj Nulo"],
  });

  const horizonte = banco.listar(TABELA).find((r) => r.cnpj === "00000002000100");
  assert.equal(horizonte.total, 465);
  assert.equal(horizonte.outros, 3);
});

test("rodar duas vezes no mesmo mês não duplica", async () => {
  const banco = criarBancoDeMentira();
  const dados = { buscarLinhas: buscarLinhasDeExemplo, banco, mes: "2026-11" };
  await sincronizar(dados);
  await sincronizar(dados);
  assert.equal(banco.listar(TABELA).length, 3);
});

test("meses diferentes viram linhas diferentes", async () => {
  const banco = criarBancoDeMentira();
  await sincronizar({ buscarLinhas: buscarLinhasDeExemplo, banco, mes: "2026-10" });
  await sincronizar({ buscarLinhas: buscarLinhasDeExemplo, banco, mes: "2026-11" });
  assert.equal(banco.listar(TABELA).length, 6);
});

test("se a busca falhar, o erro aparece e o banco não é chamado", async () => {
  const banco = criarBancoDeMentira();
  const buscarLinhas = async () => {
    throw new Error("fonte fora do ar");
  };
  await assert.rejects(() => sincronizar({ buscarLinhas, banco, mes: "2026-11" }), /fonte fora do ar/);
  assert.equal(banco.chamadas.length, 0);
});
