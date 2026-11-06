# Etapa 5: juntar tudo

Agora você escreve a função principal, que usa o que construiu até aqui:

```
buscarLinhas()  →  transformarLinhas()  →  gravarRegistros()  →  resumo
```

Ela devolve um resumo do que aconteceu:

```js
{ mes: "2026-11", gravados: 3, ignoradas: ["Escola Sem Cadastro", "Escola Cnpj Nulo"] }
```

## O que você precisa saber

**Funções podem receber funções.** A `sincronizar` não sabe de onde vêm as linhas. Ela recebe uma função `buscarLinhas` e a chama. Nos testes, essa função lê escolas inventadas. Em produção, a Mooney vai passar uma que consulta os dados reais, **sem mudar nada no seu código**. O mesmo vale para o `banco`.

**Desestruturação** pega os campos de um objeto em variáveis. A assinatura da função já usa isso:

```js
const { registros, ignoradas } = transformarLinhas(linhas, mes);
```

**Erros sobem sozinhos.** Se `buscarLinhas` falhar dentro de um `await`, a sua função para ali e o erro segue para quem a chamou. Você não precisa de código extra para isso, e o banco nem chega a ser chamado.

## Sua vez

```bash
npm run etapa5
```

Escreva `sincronizar` em `src/sincronizar.js`. Dá para resolver em quatro linhas. Lembre quais funções são assíncronas e precisam de `await`.

## Confira tudo

```bash
npm test
```

Todos os 22 testes precisam passar.

## Salve o progresso

```bash
git add src/sincronizar.js
git commit -m "Etapa 5: junta tudo na função sincronizar"
git push
```

➡️ [Executar de verdade](07-executar.md)
