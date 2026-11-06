# Etapa 2: montar o registro

**Problema real:** a fonte de dados e o banco falam de jeitos diferentes. Além disso, alguns números chegam como texto (`"210"`) ou vazios (`null`).

A função `paraRegistro(linha, mes)` recebe isto:

```js
{ cnpj: "00.000.001/0001-00", instituicoes: "Escola Exemplo Aurora",
  ei: 40, efai: "120", efaf: 95, em: null, outros: 2 }
```

E, para o mês `"2026-11"`, devolve isto:

```js
{ cnpj: "00000001000100", escola: "Escola Exemplo Aurora", mes: "2026-11",
  ei: 40, efai: 120, efaf: 95, em: 0, outros: 2, total: 255 }
```

As siglas são os segmentos: Educação Infantil (`ei`), anos iniciais do Fundamental (`efai`), anos finais do Fundamental (`efaf`) e Ensino Médio (`em`). `outros` reúne os alunos de turmas que não se encaixam em nenhum deles.

**Regra importante:** `total` soma `ei + efai + efaf + em`. `outros` fica de fora.

## O que você precisa saber

**Objeto** agrupa valores com nomes:

```js
const pessoa = { nome: "Ana", idade: 20 };
pessoa.nome; // "Ana"
```

**`const`** cria uma variável que não será reatribuída.

**Convertendo para número:**

```js
Number("210");   // 210
Number(null);    // 0
Number(undefined); // NaN (significa "não é um número")
Number("abc");   // NaN
```

O `||` escolhe o da direita quando o da esquerda é "vazio" (`0`, `NaN`, `""`, `null`, `undefined`):

```js
NaN || 0; // 0
7 || 0;   // 7
```

**Reaproveite:** dentro de `paraRegistro`, você pode chamar `limparCnpj`, que já está pronta.

## Sua vez

```bash
npm run etapa2
```

Escreva `paraRegistro` em `src/transformar.js`.

<details>
<summary>Dica 1</summary>

Crie uma variável para cada segmento já convertido. Assim, fica fácil calcular o total:

```js
const ei = Number(linha.ei) || 0;
```
</details>

<details>
<summary>Dica 2</summary>

No final, devolva o objeto inteiro: `return { cnpj: ..., escola: linha.instituicoes, mes, ei, ... };`

Escrever só `mes` é um atalho para `mes: mes`.
</details>

## Salve o progresso

```bash
git add src/transformar.js
git commit -m "Etapa 2: monta o registro"
git push
```

➡️ [Etapa 3: transformar a lista](04-etapa-3-lista.md)
