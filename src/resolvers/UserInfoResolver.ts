import { Ctx, Resolver, Query } from "type-graphql";
import { plainToClass } from "class-transformer";

import { UserInfo } from "../types";
import { fetchUserInfo } from "../api";

@Resolver()
export class UserInfoResolver {
  @Query(returns => UserInfo)
  async user(@Ctx() { headers }): Promise<UserInfo> {
    const item = await fetchUserInfo(headers);
    return plainToClass(UserInfo, item);
  }
}
