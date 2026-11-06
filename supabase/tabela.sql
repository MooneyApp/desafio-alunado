-- Rode no SQL Editor do SEU projeto Supabase de testes.
-- A chave primária (cnpj, mes) garante uma linha por escola em cada mês.
create table if not exists public.alunado_escola (
  cnpj   text    not null,
  mes    text    not null,
  escola text,
  ei     integer not null default 0,
  efai   integer not null default 0,
  efaf   integer not null default 0,
  em     integer not null default 0,
  outros integer not null default 0,
  total  integer not null default 0,
  primary key (cnpj, mes)
);

-- Sem políticas de acesso: só a chave secreta consegue ler e gravar.
alter table public.alunado_escola enable row level security;
grant select, insert, update on public.alunado_escola to service_role;
