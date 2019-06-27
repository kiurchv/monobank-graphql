import { Field, ID, Int, ObjectType } from "type-graphql";

import { CashbackType } from "./CashbackType";
import { StatementItem } from "./StatementItem";

@ObjectType()
export class AccountInfo {
  @Field(type => ID)
  id: string;

  // TODO: Use BigInt here
  @Field(type => Int)
  balance: number;

  // TODO: Use BigInt here
  @Field(type => Int)
  creditLimit: number;

  @Field(type => Int)
  currencyCode: number;

  @Field(type => CashbackType)
  cashbackType: CashbackType;

  @Field(type => [StatementItem])
  statement: StatementItem[];
}
