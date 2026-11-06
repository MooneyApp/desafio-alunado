import { test } from "node:test";
import assert from "node:assert/strict";
import { paraRegistro } from "../src/transformar.js";

const linha = {
  cnpj: "00.000.001/0001-00",
  instituicoes: "Escola Exemplo Aurora",
  ei: 40,
  efai: 120,
  efaf: 95,
  em: 10,
  outros: 2,
};

test("monta o registro completo", () => {
  assert.deepEqual(paraRegistro(linha, "2026-11"), {
    cnpj: "00000001000100",
    escola: "Escola Exemplo Aurora",
    mes: "2026-11",
    ei: 40,
    efai: 120,
    efaf: 95,
    em: 10,
    outros: 2,
    total: 265,
  });
});

test("o total não soma os alunos de `outros`", () => {
  const registro = paraRegistro({ ...linha, ei: 1, efai: 1, efaf: 1, em: 1, outros: 50 }, "2026-11");
  assert.equal(registro.total, 4);
});

test("números que chegam como texto viram números", () => {
  const registro = paraRegistro({ ...linha, ei: "7", efai: "3", efaf: "0", em: "0", outros: "1" }, "2026-11");
  assert.equal(registro.ei, 7);
  assert.equal(registro.outros, 1);
  assert.equal(registro.total, 10);
});

test("campo null ou ausente vira 0", () => {
  const registro = paraRegistro({ cnpj: "1", instituicoes: "X", ei: null, efai: 5 }, "2026-11");
  assert.equal(registro.ei, 0);
  assert.equal(registro.efaf, 0);
  assert.equal(registro.outros, 0);
  assert.equal(registro.total, 5);
});
