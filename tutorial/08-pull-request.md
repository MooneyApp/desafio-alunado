# Passo 8: abrir o Pull Request

O Pull Request (PR) é onde outra pessoa lê o seu código antes de ele entrar na `main`. Receber comentários é normal e faz parte do trabalho, em qualquer nível de experiência.

## 1. Confira antes de abrir

```bash
npm test
git status
git log --oneline
```

- Todos os testes passam.
- `git status` mostra que não falta nada e que o `.env` não aparece.
- O `git log` mostra os seus commits das etapas.

Se você não quiser deixar o `ANOTACOES.md` no PR, tire-o com `git rm ANOTACOES.md`, faça um commit e um push.

## 2. Traga as novidades da `main`

Se a `main` mudou enquanto você trabalhava, atualize a sua branch:

```bash
git pull --no-rebase origin main
```

Se o editor abrir pedindo uma mensagem, apenas salve e feche. Se aparecer a palavra `CONFLICT`, peça ajuda: conflito é normal quando duas pessoas mexem na mesma linha.

Rode `npm test` de novo e envie com `git push`.

## 3. Abra o PR

```bash
gh pr create --base main --web
```

O navegador abre a página do PR. Preencha o título e o modelo que já vem pronto, com as suas palavras.

Confira a aba **Files changed**. Ela mostra exatamente o que vai ser revisado. Só devem aparecer os arquivos das etapas, e talvez o `ANOTACOES.md`.

## 4. Espere os testes do GitHub

O GitHub roda `npm test` sozinho em uma máquina dele. Isso aparece como **Testes** no fim da página do PR. Se ficar vermelho, clique em **Details** para ler o erro. Corrija, faça um commit e um push: o PR se atualiza sozinho.

## 5. Revisão

Quem revisar vai deixar comentários nas linhas do seu código. Para cada um:

1. Faça a mudança ou explique por que discorda.
2. Faça commit e push na mesma branch.
3. Responda ao comentário.

Não abra um PR novo. Quando estiver aprovado, a equipe faz o merge e cuida da ligação com os dados reais e da publicação em produção.

**Parabéns: o seu código vai rodar de verdade, todo mês. 🎉**
