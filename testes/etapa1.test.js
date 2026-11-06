import { test } from "node:test";
import assert from "node:assert/strict";
import { limparCnpj } from "../src/transformar.js";

test("tira pontos, barra e traço", () => {
  assert.equal(limparCnpj("00.000.001/0001-00"), "00000001000100");
});

test("não muda um CNPJ que já só tem dígitos", () => {
  assert.equal(limparCnpj("00000002000100"), "00000002000100");
});

test("texto vazio continua vazio", () => {
  assert.equal(limparCnpj(""), "");
});

test("null vira texto vazio", () => {
  assert.equal(limparCnpj(null), "");
});

test("undefined vira texto vazio", () => {
  assert.equal(limparCnpj(undefined), "");
});
