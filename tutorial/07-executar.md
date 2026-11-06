# Passo 7: executar de verdade

Os testes conferem casos específicos. Agora você vai rodar o programa inteiro e ver os dados em um banco de verdade.

## 1. No banco de mentira

```bash
npm run executar
```

Sem `.env`, o programa grava na memória e mostra uma tabela com três escolas e o resumo. A mensagem `.env not found` é normal aqui. Para usar um mês específico:

```bash
npm run executar -- 2026-10
```

## 2. No seu próprio Supabase

O Supabase é um serviço de banco de dados na internet. Você vai criar um projeto seu, gratuito, só para este teste. Ele não tem nenhuma relação com os dados da Mooney.

1. Crie uma conta e um projeto em [supabase.com](https://supabase.com). Guarde a senha do banco em um lugar seguro.
2. No menu do projeto, abra o **SQL Editor**.
3. Cole o conteúdo de `supabase/tabela.sql` e clique em **Run**. Isso cria a tabela.
4. Copie o arquivo de exemplo de configuração:

```bash
cp .env.example .env
```

5. Procure a tela de configurações de API do projeto (geralmente **Project Settings → API Keys** e **Data API**; os nomes podem mudar). Preencha o `.env` com:
   - `SUPABASE_URL`: a URL do projeto;
   - `SUPABASE_CHAVE_SECRETA`: a chave `secret` (em projetos mais antigos, `service_role`).

### Cuidado com a chave secreta

Essa chave dá acesso total ao seu banco. Ela nunca pode aparecer em código, commit, print ou mensagem. O `.env` está no `.gitignore`, então o Git o ignora. Confirme:

```bash
git status
```

O `.env` **não pode** aparecer na lista. Se a chave vazar, apague-a no painel do Supabase e crie outra.

### Rode

```bash
npm run executar -- 2026-11
```

A primeira linha precisa dizer `Gravando em: Supabase`. Depois, abra o **Table Editor** do Supabase e veja as linhas na tabela `alunado_escola`.

## 3. Prove que não duplica

Rode o mesmo comando de novo e atualize o Table Editor: continuam 3 linhas. Agora mude o mês:

```bash
npm run executar -- 2026-12
```

Devem aparecer 3 linhas novas, 6 no total.

## Problemas comuns

| Mensagem | O que costuma ser |
|---|---|
| `Could not find the table` | O `tabela.sql` não foi rodado, ou o `SUPABASE_URL` aponta para outro projeto |
| `Invalid API key` | A chave está errada ou incompleta |
| `permission denied` ou `row-level security` | Você usou a chave pública, e não a secreta |
| `Gravando em: banco de mentira` | O `.env` não está na raiz do projeto ou algum campo está vazio |

**Pronto para o próximo passo quando:** você viu as linhas no Table Editor.

➡️ [Abrir o Pull Request](08-pull-request.md)
