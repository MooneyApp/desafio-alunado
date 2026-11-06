// PRONTO, não precisa mexer. Lê as escolas inventadas de dados/alunado-exemplo.json.
// Em produção, quem entrega essas linhas é uma consulta ao nosso data warehouse.
import { readFile } from "node:fs/promises";

export async function buscarLinhasDeExemplo() {
  const arquivo = new URL("../dados/alunado-exemplo.json", import.meta.url);
  return JSON.parse(await readFile(arquivo, "utf-8"));
}
