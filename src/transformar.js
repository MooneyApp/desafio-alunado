// Aqui você transforma as linhas que chegam da fonte de dados nos registros do banco.
// Não precisa falar com banco nenhum neste arquivo: é só entrada e saída.

/**
 * ETAPA 1: deixa só os dígitos do CNPJ.
 * limparCnpj("00.000.001/0001-00") → "00000001000100"
 * limparCnpj(null)                 → ""
 */
export function limparCnpj(cnpj) {
  throw new Error("Etapa 1: escreva a função limparCnpj");
}

/**
 * ETAPA 2: transforma uma linha da fonte em um registro do banco.
 * Campos do registro: cnpj, escola, mes, ei, efai, efaf, em, outros, total.
 * Veja os detalhes em tutorial/03-etapa-2-registro.md.
 */
export function paraRegistro(linha, mes) {
  throw new Error("Etapa 2: escreva a função paraRegistro");
}

/**
 * ETAPA 3: transforma a lista inteira.
 * Devolve { registros, ignoradas }.
 * `ignoradas` tem o nome das escolas que ficaram sem CNPJ.
 */
export function transformarLinhas(linhas, mes) {
  throw new Error("Etapa 3: escreva a função transformarLinhas");
}
