# monobank-graphql

GraphQL wrapper around [Monobank API](https://api.monobank.ua/docs)

## Quick start

1. Open monobank-graphql sandbox

[![Edit monobank-graphql](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/kiurchv/monobank-graphql/tree/master/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fserver.ts&view=preview)

2. Obtain [Monobank API Token](https://api.monobank.ua/) and put it in `X-Token` header in the Playground

3. Make your first query

```graphql
{
  user {
    name
    accounts {
      id
      currencyCode
      balance
    }
  }
}
```

## Development

1. Clone this repo
2. Install dependencies with `npm install`
3. Run `npm run dev`
4. The Monobank GraphQL Playground will be available at http://localhost:4000/
