import { Args, ArgsType, Ctx, Field, FieldResolver, Resolver, Root } from "type-graphql";
import { plainToClass } from "class-transformer";

import { AccountInfo, StatementItem } from "../types";
import { DateTime } from "../scalars";
import { fetchStatementItems } from "../api";

@ArgsType()
class StatementArgs {
  @Field(type => DateTime)
  from: number;

  @Field(type => DateTime, { nullable: true })
  to?: number;
}

@Resolver(of => AccountInfo)
export class AccountInfoResolver {
  @FieldResolver(returns => [StatementItem])
  async statement(
    @Root() { id: account }: AccountInfo,
    @Args() { from, to }: StatementArgs,
    @Ctx() { headers }
  ): Promise<StatementItem[]> {
    const items = await fetchStatementItems({ account, from, to }, headers);
    return plainToClass(StatementItem, items);
  }
}
