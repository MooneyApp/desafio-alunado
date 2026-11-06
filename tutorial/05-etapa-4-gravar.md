# Etapa 4: gravar no banco

Esta é a etapa mais nova para você. Vá com calma e leia a explicação inteira.

**Problema real:** a função roda várias vezes no mesmo mês. Se cada execução criasse linhas novas, os alunos seriam contados em dobro. Precisamos atualizar a linha quando ela já existe e criar quando não existe. Essa operação se chama **upsert** (*update* + *insert*).

## O que você precisa saber

### `await`: esperar por algo demorado

Até aqui, cada linha terminava antes da próxima começar. Falar com um banco é diferente: o pedido viaja pela internet e a resposta demora.

Sem esperar, o JavaScript segue em frente com uma **Promise**, que é uma promessa de resultado que ainda não chegou. O `await` faz a função esperar pelo resultado:

```js
const resposta = banco.from("tabela").upsert(dados);       // ❌ é só a promessa
const resposta = await banco.from("tabela").upsert(dados); // ✅ é o resultado
```

O `await` só funciona dentro de uma função marcada com `async`:

```js
async function exemplo() {
  const resposta = await algoDemorado();
  return resposta;
}
```

Uma função `async` também devolve uma Promise. Por isso, quem a chama também precisa usar `await`.

### Como pedir o upsert

É assim que se fala com o Supabase. O nosso banco de mentira responde do mesmo jeito:

```js
const resposta = await banco.from(TABELA).upsert(registros, { onConflict: CHAVE });
```

- `from(TABELA)` escolhe a tabela.
- `upsert(registros, ...)` envia os dados.
- `onConflict: CHAVE` diz quais colunas identificam uma linha. Aqui são `cnpj,mes`: uma linha por escola em cada mês.

`TABELA` e `CHAVE` já estão no topo de `src/gravar.js`.

### Erros

O Supabase não interrompe o programa quando algo dá errado. Ele devolve o problema na resposta:

```js
{ data: null, error: { message: "banco fora do ar" } } // deu erro
{ data: null, error: null }                            // deu certo
```

Se você não olhar para `error`, a falha passa despercebida e o banco fica desatualizado sem ninguém saber. Para interromper o programa com uma mensagem clara, use `throw`:

```js
if (resposta.error) {
  throw new Error(`Falha ao gravar: ${resposta.error.message}`);
}
```

O texto entre crases pode incluir valores com `${...}`.

### Sair mais cedo

Um `return` antes do fim encerra a função. Isso serve para o caso da lista vazia:

```js
if (registros.length === 0) {
  return 0;
}
```

## Sua vez

```bash
npm run etapa4
```

Escreva `gravarRegistros` em `src/gravar.js`. Ela precisa:

1. devolver `0` sem chamar o banco, se a lista vier vazia;
2. fazer o upsert usando `await`;
3. lançar um erro que contenha a mensagem do banco, se houver erro;
4. devolver quantos registros foram gravados.

**Experimente:** depois de passar, tire o `await` e rode de novo. Veja qual teste falha e leia a mensagem. Depois, coloque de volta.

## Salve o progresso

```bash
git add src/gravar.js
git commit -m "Etapa 4: grava os registros no banco"
git push
```

➡️ [Etapa 5: juntar tudo](06-etapa-5-sincronizar.md)
