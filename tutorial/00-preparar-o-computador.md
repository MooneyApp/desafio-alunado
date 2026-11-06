# Passo 0: preparar o computador (Windows)

Este passo leva uns 30 minutos. Instale tudo nesta ordem.

## 1. Instalar os programas

### Node.js

Roda JavaScript fora do navegador.

1. Baixe a versão **LTS** em [nodejs.org](https://nodejs.org) (o instalador `.msi`).
2. Clique em **Next** até o fim. Deixe **desmarcada** a opção *Automatically install the necessary tools*: você não vai precisar dela.

### Git

Guarda o histórico do código. Ele também instala o **Git Bash**, o terminal que vamos usar.

1. Baixe em [git-scm.com/downloads/win](https://git-scm.com/downloads/win).
2. Durante a instalação, aceite as opções padrão, com uma exceção: na tela *Choosing the default editor used by Git*, escolha **Use Visual Studio Code as Git's default editor**. Se o botão **Next** ficar cinza, instale o VS Code primeiro e volte a esta instalação.

### GitHub CLI

Faz o login no GitHub pelo terminal. Baixe o instalador em [cli.github.com](https://cli.github.com) e clique em **Next** até o fim.

### VS Code

O editor onde você vai escrever o código. Baixe em [code.visualstudio.com](https://code.visualstudio.com). Na tela *Select Additional Tasks*, deixe marcada a opção **Add to PATH**.

## 2. Configurar o terminal

O terminal é onde você dá ordens ao computador escrevendo comandos. O Windows tem vários. Neste desafio, use sempre o **Git Bash dentro do VS Code**, porque todos os comandos do tutorial foram escritos para ele.

1. **Reinicie o computador**, para o Windows reconhecer os programas novos.
2. Abra o VS Code.
3. Aperte `Ctrl+Shift+P`, escreva `Terminal: Select Default Profile`, aperte Enter e escolha **Git Bash**.
4. Abra o menu **Terminal → New Terminal**.

Olhe para o painel que abriu embaixo:

- ✅ **Git Bash:** a linha termina em `$` e costuma mostrar `MINGW64`.
- ❌ **PowerShell:** a linha começa com `PS C:\`. Volte ao item 3.

Duas coisas que ajudam:

- Para colar um comando no terminal, use `Ctrl+V` ou o botão direito do mouse.
- `Ctrl+C` no terminal não copia: ele interrompe o programa que está rodando.

Neste tutorial, o texto dentro dos blocos cinza é o que você digita. Depois, aperte Enter.

## 3. Conferir a instalação

```bash
node -v
npm -v
git --version
gh --version
```

Cada comando precisa mostrar um número de versão, e o do Node precisa ser `v22.9` ou maior.

Se aparecer `command not found`, feche o VS Code e abra de novo. Se continuar, reinstale o programa que falhou.

## 4. Sua conta no GitHub

O GitHub é o site onde o código fica guardado.

1. Crie uma conta em [github.com](https://github.com), se ainda não tiver.
2. Mande seu usuário para quem passou o desafio. Você vai receber um convite por e-mail. **Aceite antes de continuar.**
3. Faça login pelo terminal:

```bash
gh auth login --hostname github.com --git-protocol https --web
```

Se perguntar sobre autenticar o Git, responda `Y`. Copie o código de 8 caracteres que aparecer, aperte Enter e cole o código na página que abrir no navegador.

4. Confira:

```bash
gh auth status
```

Precisa aparecer `Logged in to github.com`.

## 5. Dizer ao Git quem é você

```bash
git config --global user.name "Seu Nome"
git config --global user.email "SEU_ID+SEU_USUARIO@users.noreply.github.com"
git config --global core.editor "code --wait"
```

O e-mail de cada commit fica visível em repositórios públicos. Por isso, usamos o endereço privado que o GitHub oferece. Você encontra o seu em **Settings → Emails** no GitHub, na opção *Keep my email addresses private*.

## Problemas comuns no Windows

| O que aparece | O que fazer |
|---|---|
| `execução de scripts foi desabilitada` ou `running scripts is disabled` | Você está no PowerShell. Volte para o Git Bash (item 2) |
| `'git' não é reconhecido como um comando` | Você está no Prompt de Comando (CMD). Volte para o Git Bash |
| `command not found` logo depois de instalar | Feche e abra o VS Code. Se continuar, reinicie o computador |
| O antivírus bloqueia o `npm install` ou o `node` | Permita o Node.js no antivírus e tente de novo |

**Pronto para o próximo passo quando:** todos os comandos da seção 3 mostram versões, `gh auth status` mostra que você está logado e o terminal é o Git Bash.

➡️ [Passo 1: pegar o código](01-pegar-o-codigo.md)
