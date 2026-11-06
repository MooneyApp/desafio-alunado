import { test } from "node:test";
import assert from "node:assert/strict";
import { gravarRegistros, TABELA } from "../src/gravar.js";
import { criarBancoDeMentira } from "../src/banco-de-mentira.js";

const registro = (cnpj, total) => ({ cnpj, mes: "2026-11", escola: "X", ei: total, efai: 0, efaf: 0, em: 0, outros: 0, total });

test("grava os registros e devolve quantos foram", async () => {
  const banco = criarBancoDeMentira();
  const gravados = await gravarRegistros(banco, [registro("1", 10), registro("2", 20)]);
  assert.equal(gravados, 2);
  assert.equal(banco.listar(TABELA).length, 2, "Os dados não estavam no banco. Faltou o await?");
});

test("rodar duas vezes não duplica: atualiza a linha que já existe", async () => {
  const banco = criarBancoDeMentira();
  await gravarRegistros(banco, [registro("1", 10)]);
  await gravarRegistros(banco, [registro("1", 99)]);
  const linhas = banco.listar(TABELA);
  assert.equal(linhas.length, 1);
  assert.equal(linhas[0].total, 99);
});

test("usa a tabela certa e informa a chave do upsert", async () => {
  const banco = criarBancoDeMentira();
  await gravarRegistros(banco, [registro("1", 10)]);
  assert.equal(banco.chamadas[0].tabela, "alunado_escola");
  assert.equal(banco.chamadas[0].opcoes.onConflict, "cnpj,mes");
});

test("se o banco responde com erro, a função lança esse erro", async () => {
  const banco = criarBancoDeMentira({ falharCom: "banco fora do ar" });
  await assert.rejects(() => gravarRegistros(banco, [registro("1", 10)]), /banco fora do ar/);
});

test("lista vazia devolve 0 sem chamar o banco", async () => {
  const banco = criarBancoDeMentira();
  assert.equal(await gravarRegistros(banco, []), 0);
  assert.equal(banco.chamadas.length, 0);
});
