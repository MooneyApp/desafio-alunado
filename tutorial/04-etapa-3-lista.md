# Etapa 3: transformar a lista

**Problema real:** chega uma lista com todas as escolas e algumas não têm CNPJ. Sem CNPJ não dá para identificar a escola no banco. Elas ficam de fora, mas não podem sumir em silêncio: guardamos os nomes para alguém corrigir o cadastro.

`transformarLinhas(linhas, mes)` devolve um objeto com duas listas:

```js
{
  registros: [ /* um registro para cada escola com CNPJ */ ],
  ignoradas: [ "Escola Sem Cadastro" ] // nomes das escolas sem CNPJ
}
```

Conta como "sem CNPJ" qualquer valor que, depois de limpo, fique vazio: `""`, `null` e até `"../-"`.

## O que você precisa saber

**Lista (array):**

```js
const frutas = [];
frutas.push("maçã");
frutas.push("uva");
frutas.length; // 2
```

Usamos `const` mesmo assim: a variável continua apontando para a mesma lista, e o conteúdo dela pode mudar.

**Percorrer uma lista com `for...of`:**

```js
for (const fruta of frutas) {
  console.log(fruta);
}
```

**Decidir com `if`:**

```js
if (fruta === "uva") {
  console.log("é uva");
} else {
  console.log("não é uva");
}
```

Em JavaScript, use `===` para comparar.

## Sua vez

```bash
npm run etapa3
```

Escreva `transformarLinhas` em `src/transformar.js`.

<details>
<summary>Dica</summary>

1. Crie duas listas vazias.
2. Percorra `linhas` com `for...of`.
3. Limpe o CNPJ de cada linha e decida para qual lista ela vai.
4. O nome da escola está em `linha.instituicoes`.
5. Devolva `{ registros, ignoradas }`.
</details>

## Salve o progresso

```bash
git add src/transformar.js
git commit -m "Etapa 3: transforma a lista"
git push
```

➡️ [Etapa 4: gravar no banco](05-etapa-4-gravar.md)
