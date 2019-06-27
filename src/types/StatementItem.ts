import { Field, ID, Int, ObjectType } from "type-graphql";

import { DateTime } from "../scalars";

@ObjectType()
export class StatementItem {
  @Field(type => ID)
  id: string;

  @Field(type => DateTime)
  time: number;

  @Field()
  description: string;

  @Field(type => Int)
  mcc: number;

  @Field()
  hold: boolean;

  // TODO: Use BigInt here
  @Field(type => Int)
  amount: number;

  // TODO: Use BigInt here
  @Field(type => Int)
  operationAmount: number;

  @Field(type => Int)
  currencyCode: number;

  // TODO: Use BigInt here
  @Field(type => Int)
  commissionRate: number;

  // TODO: Use BigInt here
  @Field(type => Int)
  cashbackAmount: number;

  // TODO: Use BigInt here
  @Field(type => Int)
  balance: number;
}
