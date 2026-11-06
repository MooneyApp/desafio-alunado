# Passo 0: preparar o computador

## O terminal

O terminal é um programa onde você dá ordens ao computador escrevendo comandos.

- **Mac:** abra o app **Terminal**.
- **Windows:** instale o Git (abaixo) e use o app **Git Bash**.
- **Linux:** abra o terminal da sua distribuição.

Digite um comando e aperte Enter. Neste tutorial, o texto dentro dos blocos cinza é o que você digita.

## O que instalar

1. **Node.js 22 ou mais novo:** roda JavaScript fora do navegador. Baixe a versão LTS em [nodejs.org](https://nodejs.org).
2. **Git:** guarda o histórico do código. Baixe em [git-scm.com](https://git-scm.com/downloads).
3. **GitHub CLI:** faz o login no GitHub pelo terminal. Baixe em [cli.github.com](https://cli.github.com).
4. **VS Code:** o editor onde você vai escrever o código. Baixe em [code.visualstudio.com](https://code.visualstudio.com).

Feche e abra o terminal de novo depois de instalar. Depois confira:

```bash
node -v
git --version
gh --version
```

Cada comando precisa mostrar um número de versão, e o do Node precisa ser `v22.9` ou maior. Se aparecer `command not found`, a instalação não funcionou ou o terminal não foi reaberto.

## Sua conta no GitHub

O GitHub é o site onde o código fica guardado.

1. Crie uma conta em [github.com](https://github.com) se ainda não tiver.
2. Mande seu usuário para quem passou o desafio. Você vai receber um convite por e-mail. **Aceite antes de continuar.**
3. Faça login pelo terminal:

```bash
gh auth login
```

Responda: `GitHub.com`, `HTTPS`, `Yes` e `Login with a web browser`. Depois siga as instruções na tela.

4. Diga ao Git quem é você:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "SEU_ID+SEU_USUARIO@users.noreply.github.com"
```

O e-mail de cada commit fica visível em repositórios públicos. Por isso usamos o endereço privado que o GitHub oferece. Você encontra o seu em **Settings → Emails**, na opção *Keep my email addresses private*.

**Pronto para o próximo passo quando:** os três comandos mostram versões e o `gh auth status` mostra que você está logado.

➡️ [Passo 1: pegar o código](01-pegar-o-codigo.md)
