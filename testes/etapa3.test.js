import { test } from "node:test";
import assert from "node:assert/strict";
import { transformarLinhas } from "../src/transformar.js";

const boa = (cnpj, nome) => ({ cnpj, instituicoes: nome, ei: 1, efai: 1, efaf: 1, em: 1, outros: 0 });

test("transforma todas as linhas com CNPJ", () => {
  const { registros, ignoradas } = transformarLinhas(
    [boa("00.000.001/0001-00", "A"), boa("00000002000100", "B")],
    "2026-11"
  );
  assert.deepEqual(registros.map((r) => r.cnpj), ["00000001000100", "00000002000100"]);
  assert.equal(registros[0].mes, "2026-11");
  assert.deepEqual(ignoradas, []);
});

test("escola sem CNPJ fica de fora e entra em `ignoradas`", () => {
  const { registros, ignoradas } = transformarLinhas(
    [boa("", "Sem Cnpj"), boa(null, "Cnpj Nulo"), boa("00000002000100", "B")],
    "2026-11"
  );
  assert.equal(registros.length, 1);
  assert.equal(registros[0].escola, "B");
  assert.deepEqual(ignoradas, ["Sem Cnpj", "Cnpj Nulo"]);
});

test("CNPJ só com pontuação também conta como sem CNPJ", () => {
  const { registros, ignoradas } = transformarLinhas([boa("../-", "Pontuação")], "2026-11");
  assert.deepEqual(registros, []);
  assert.deepEqual(ignoradas, ["Pontuação"]);
});

test("lista vazia devolve listas vazias", () => {
  assert.deepEqual(transformarLinhas([], "2026-11"), { registros: [], ignoradas: [] });
});
