// PRONTO, não precisa mexer. Roda o desafio inteiro com:
//   npm run executar            → usa o mês atual
//   npm run executar -- 2026-11 → usa o mês informado
//
// Sem .env, grava no banco de mentira. Com .env, grava no SEU Supabase de testes.
import { criarBancoDeMentira } from "./banco-de-mentira.js";
import { buscarLinhasDeExemplo } from "./fonte-de-exemplo.js";
import { sincronizar } from "./sincronizar.js";
import { TABELA } from "./gravar.js";

function mesAtual() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
  }).format(new Date());
}

const mes = process.argv[2] ?? mesAtual();
if (!/^\d{4}-\d{2}$/.test(mes)) {
  console.error(`Mês inválido: "${mes}". Use o formato 2026-11.`);
  process.exit(1);
}

const { SUPABASE_URL: url, SUPABASE_CHAVE_SECRETA: chave } = process.env;
const usarSupabase = Boolean(url && chave);

let banco;
if (usarSupabase) {
  const { createClient } = await import("@supabase/supabase-js");
  banco = createClient(url, chave, { auth: { persistSession: false } });
} else {
  banco = criarBancoDeMentira();
}

console.log(`Gravando em: ${usarSupabase ? "Supabase" : "banco de mentira"}`);

try {
  const resumo = await sincronizar({ buscarLinhas: buscarLinhasDeExemplo, banco, mes });
  console.log("Resumo:", resumo);

  if (usarSupabase) {
    const { data, error } = await banco.from(TABELA).select("*").eq("mes", mes).order("cnpj");
    if (error) throw new Error(error.message);
    console.table(data);
  } else {
    console.table(banco.listar(TABELA));
  }
} catch (erro) {
  console.error("Deu erro:", erro.message);
  process.exit(1);
}
