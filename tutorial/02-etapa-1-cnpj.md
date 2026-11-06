# Etapa 1: limpar o CNPJ

**Problema real:** o mesmo CNPJ pode chegar como `00.000.001/0001-00` ou `00000001000100`. Para o computador, são textos diferentes. Precisamos guardar sempre do mesmo jeito: só os dígitos.

## Rode os testes

```bash
npm run etapa1
```

Vai dar tudo vermelho, e é para ser assim. Procure uma linha como esta:

```
Error: Etapa 1: escreva a função limparCnpj
```

Um teste chama a sua função e compara o resultado com o esperado:

```js
assert.equal(limparCnpj("00.000.001/0001-00"), "00000001000100");
```

Leia isso como: "`limparCnpj` deveria devolver `00000001000100` quando recebe `00.000.001/0001-00`". Abra `testes/etapa1.test.js` e veja os outros casos.

Quando um teste falha, o Node mostra:
- `actual`: o que a sua função devolveu;
- `expected`: o que o teste esperava.

## O que você precisa saber

**Função** recebe algo, faz um trabalho e devolve um resultado com `return`:

```js
function dobro(numero) {
  return numero * 2;
}
dobro(4); // 8
```

**`replace` com expressão regular** troca pedaços de um texto. A expressão regular `/\D/g` significa "tudo que não é dígito". Use assim, sem precisar decorar:

```js
"a1-b2".replace(/\D/g, ""); // "12"
```

**`null` e `undefined`** representam "não tem valor". Chamar `null.replace(...)` quebra o programa. O operador `??` oferece um valor reserva:

```js
null ?? "reserva";    // "reserva"
undefined ?? "reserva"; // "reserva"
"oi" ?? "reserva";    // "oi"
```

**`String(valor)`** transforma qualquer valor em texto.

## Sua vez

Abra `src/transformar.js`, apague a linha com `throw new Error(...)` da função `limparCnpj` e escreva a sua versão. Rode `npm run etapa1` depois de cada tentativa.

<details>
<summary>Dica 1</summary>

Comece fazendo só o primeiro teste passar, com `cnpj.replace(...)` e `return`. Depois resolva o caso do `null`.
</details>

<details>
<summary>Dica 2</summary>

Antes de chamar `replace`, garanta que você tem um texto: use `??` para trocar `null` por `""`.
</details>

## Salve o progresso

Quando os 5 testes passarem:

```bash
git add src/transformar.js
git commit -m "Etapa 1: limpa o CNPJ"
git push
```

➡️ [Etapa 2: montar o registro](03-etapa-2-registro.md)
