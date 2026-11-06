// A tabela e as colunas que identificam uma linha única. Já estão prontas para você usar.
export const TABELA = "alunado_escola";
export const CHAVE = "cnpj,mes";

/**
 * ETAPA 4: grava os registros no banco com upsert e devolve quantos foram gravados.
 * Se o banco devolver erro, lança um erro. Se a lista vier vazia, devolve 0 sem chamar o banco.
 */
export async function gravarRegistros(banco, registros) {
  throw new Error("Etapa 4: escreva a função gravarRegistros");
}
