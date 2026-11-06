// PRONTO, não precisa mexer. Imita a parte do Supabase que o desafio usa,
// guardando tudo na memória. Quando o programa termina, os dados somem.

export function criarBancoDeMentira({ falharCom = null } = {}) {
  const tabelas = new Map();
  const chamadas = [];

  return {
    chamadas,
    listar(tabela) {
      return [...(tabelas.get(tabela)?.values() ?? [])];
    },
    from(tabela) {
      return {
        async upsert(registros, opcoes = {}) {
          chamadas.push({ tabela, registros, opcoes });
          // Como a rede de verdade, o banco demora um pouco para responder.
          await new Promise((resolver) => setTimeout(resolver, 10));

          if (falharCom) return { data: null, error: { message: falharCom } };
          if (!opcoes.onConflict) {
            return { data: null, error: { message: 'faltou a opção onConflict no upsert' } };
          }

          const colunas = opcoes.onConflict.split(",");
          const chaveDe = (registro) => colunas.map((coluna) => registro[coluna]).join("|");

          const chaves = registros.map(chaveDe);
          if (new Set(chaves).size !== chaves.length) {
            return {
              data: null,
              error: { message: "dois registros com a mesma chave no mesmo upsert" },
            };
          }

          if (!tabelas.has(tabela)) tabelas.set(tabela, new Map());
          for (const registro of registros) {
            tabelas.get(tabela).set(chaveDe(registro), { ...registro });
          }
          return { data: null, error: null };
        },
      };
    },
  };
}
