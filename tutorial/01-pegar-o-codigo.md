# Passo 1: pegar o código

## O que é o Git, em poucas palavras

- **Repositório:** a pasta do projeto com todo o histórico dela.
- **Clone:** a sua cópia do repositório, no seu computador.
- **Branch:** uma linha de trabalho separada. Você mexe à vontade sem afetar a versão principal, chamada `main`.
- **Commit:** um ponto salvo no histórico, com uma mensagem dizendo o que mudou.
- **Push:** envia os seus commits para o GitHub.
- **Pull Request (PR):** o pedido para juntar a sua branch com a `main`, depois de uma revisão.

## 1. Baixar o repositório

Vamos criar uma pasta `projetos` dentro da sua pasta de usuário (`C:\Users\seu-nome`) e baixar o código nela:

```bash
mkdir -p ~/projetos
cd ~/projetos
git clone https://github.com/MooneyApp/desafio-alunado.git
cd desafio-alunado
```

`cd` significa "entrar na pasta", e `~` é um atalho para a sua pasta de usuário. A partir daqui, rode todos os comandos de dentro de `desafio-alunado`. A linha do terminal mostra em qual pasta você está.

**Evite as pastas sincronizadas pelo OneDrive**, como Documentos e Área de Trabalho. A sincronização costuma deixar o `npm install` lento e pode causar erros.

Quando voltar ao projeto outro dia, abra o VS Code, use **File → Open Recent** e abra um terminal novo. Ele já abre na pasta certa.

## 2. Instalar as dependências

```bash
npm install
```

Isso baixa as bibliotecas do projeto para a pasta `node_modules`. Ela não vai para o Git.

## 3. Criar a sua branch

Troque `seu-nome` pelo seu nome:

```bash
git switch -c desafio/seu-nome
```

Confira em qual branch você está:

```bash
git status
```

A primeira linha precisa dizer `On branch desafio/seu-nome`. **Nunca trabalhe direto na `main`.**

## 4. Abrir o projeto no editor

```bash
code .
```

Isso abre o projeto em uma janela nova do VS Code. **Continue usando o terminal dessa janela nova** (**Terminal → New Terminal**), que já abre na pasta certa. Se o comando `code` não existir, use **File → Open Folder** e escolha a pasta `desafio-alunado` dentro de `projetos`.

Dê uma olhada nas pastas:

| Pasta | O que tem | Você mexe? |
|---|---|---|
| `src/transformar.js`, `src/gravar.js`, `src/sincronizar.js` | As funções do desafio | **Sim** |
| `src/` (outros arquivos) | Código de apoio, já pronto | Não |
| `testes/` | Os testes de cada etapa | Não |
| `dados/` | As escolas inventadas | Não |
| `tutorial/` | Este tutorial | Não |

## 5. Seu primeiro commit e push

Vamos fazer o primeiro commit criando um arquivo com as suas anotações. Crie `ANOTACOES.md` na raiz do projeto com uma frase qualquer. Depois rode:

```bash
git status
git add ANOTACOES.md
git commit -m "Adiciona minhas anotações"
git push -u origin desafio/seu-nome
```

O que cada comando faz:

1. `git status` mostra o que mudou.
2. `git add` escolhe o que entra no próximo commit.
3. `git commit` salva esse ponto no histórico.
4. `git push` envia para o GitHub. O `-u origin ...` só é necessário na primeira vez.

Depois disso, abra a página do repositório no GitHub e procure a sua branch na lista de branches.

**Atenção:** evite `git add .`, que adiciona tudo de uma vez. Adicionar arquivo por arquivo evita mandar algo que não devia. Use o `ANOTACOES.md` para registrar dúvidas e descobertas durante o desafio.

**Pronto para o próximo passo quando:** a sua branch aparece no GitHub.

➡️ [Etapa 1: limpar o CNPJ](02-etapa-1-cnpj.md)
