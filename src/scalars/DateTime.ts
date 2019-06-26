import { Kind, GraphQLScalarType } from "graphql";

export const DateTime = new GraphQLScalarType({
  name: "DateTime",
  description:
    "The `DateTime` scalar type represents a date and time in the UTC " +
    "timezone. The DateTime appears in a JSON response as an ISO8601 formatted " +
    "string, including UTC timezone.",
  serialize(value: number) {
    if (Number.isInteger(value)) {
      return new Date(value * 1000).toISOString();
    }

    return null;
  },
  parseValue,
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return parseValue(ast.value);
    }

    return null;
  }
});

function parseValue(value: string) {
  return Math.trunc(new Date(value).getTime() / 1000);
}
