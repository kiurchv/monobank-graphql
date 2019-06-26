import { Resolver, Query } from "type-graphql";
import { plainToClass } from "class-transformer";

import { CurrencyInfo } from "../types";
import { fetchCurrencyInfo } from "../api";

@Resolver()
export class CurrencyInfoResolver {
  @Query(returns => [CurrencyInfo], { description: "TODO" })
  async currencies(): Promise<CurrencyInfo[]> {
    const items = await fetchCurrencyInfo();
    return plainToClass(CurrencyInfo, items);
  }
}
