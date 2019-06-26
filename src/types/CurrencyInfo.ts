import { Field, Int, ObjectType } from "type-graphql";

import { DateTime } from "../scalars";

@ObjectType({ description: "TODO" })
export class CurrencyInfo {
  @Field(type => Int)
  currencyCodeA: number;

  @Field(type => Int)
  currencyCodeB: number;

  @Field(type => DateTime)
  date: number;

  @Field({ nullable: true })
  rateSell?: number;

  @Field({ nullable: true })
  rateBuy?: number;

  @Field({ nullable: true })
  rateCross?: number;
}
