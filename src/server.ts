import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import * as resolvers from "./resolvers";

const BYPASS_HEADERS = ["x-token"];

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: Object.values(resolvers)
  });

  // Create GraphQL server
  const server = new ApolloServer({
    schema,
    // enable GraphQL Playground
    playground: true,
    context: ({ req }) => ({
      headers: Object.fromEntries(
        Object.entries(req.headers).filter(([key]) => BYPASS_HEADERS.includes(key))
      )
    })
  });

  // Start the server
  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
