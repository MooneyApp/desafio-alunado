# Desafio: sincronizar o alunado das escolas

Você vai escrever uma função que será usada de verdade na Mooney.

Todo mês, precisamos saber quantos alunos cada escola tem em cada segmento e guardar esse número em um banco de dados. Sua função recebe as linhas com esses números, arruma os dados e grava tudo no banco:

```
fonte de dados  →  transformar  →  gravar no banco
```

Você não precisa saber Git nem `async/await`: o tutorial ensina os dois quando chegar a hora.

## Como funciona

Os testes já estão escritos e todos começam falhando. Seu trabalho é escrever o código que faz cada um passar. Quando tudo estiver verde, você abre um Pull Request (PR) e a Mooney revisa.

Você trabalha o tempo todo com escolas inventadas. Não precisa de nenhuma senha ou acesso da Mooney. Depois da revisão, a equipe liga o seu código aos dados reais.

## Roteiro

| # | Passo | O que você aprende |
|---|---|---|
| 0 | [Preparar o computador](tutorial/00-preparar-o-computador.md) | Terminal, Node.js, Git |
| 1 | [Pegar o código](tutorial/01-pegar-o-codigo.md) | Clone, branch, commit, push |
| 2 | [Etapa 1: limpar o CNPJ](tutorial/02-etapa-1-cnpj.md) | Funções, textos, rodar testes |
| 3 | [Etapa 2: montar o registro](tutorial/03-etapa-2-registro.md) | Objetos, conversão de números |
| 4 | [Etapa 3: transformar a lista](tutorial/04-etapa-3-lista.md) | Listas, `for`, `if` |
| 5 | [Etapa 4: gravar no banco](tutorial/05-etapa-4-gravar.md) | `async/await`, erros |
| 6 | [Etapa 5: juntar tudo](tutorial/06-etapa-5-sincronizar.md) | Combinar funções |
| 7 | [Executar de verdade](tutorial/07-executar.md) | Supabase, variáveis de ambiente |
| 8 | [Abrir o Pull Request](tutorial/08-pull-request.md) | PR, revisão de código |

Faça na ordem. Cada passo depende do anterior.

## Regras do jogo

1. **Nunca coloque senhas ou chaves em um commit.** Este repositório é público: qualquer pessoa no mundo lê o que está aqui, inclusive o histórico.
2. **Só use dados inventados.** Nada de nomes de escola, CNPJs ou números reais.
3. **Não altere a pasta `testes/`.** Se um teste falha, o que muda é o seu código.
4. **Pode pedir ajuda.** Travar faz parte. Antes de perguntar, leia a mensagem de erro com calma e anote o que já tentou.

## Comandos

| Comando | O que faz |
|---|---|
| `npm run etapa1` (até `etapa5`) | Roda os testes de uma etapa |
| `npm test` | Roda todos os testes |
| `npm run executar` | Roda o programa inteiro |
