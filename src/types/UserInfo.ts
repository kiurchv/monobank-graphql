import { Field, ObjectType } from "type-graphql";

import { AccountInfo } from "./AccountInfo";

@ObjectType()
export class UserInfo {
  @Field()
  name: string;

  @Field(type => [AccountInfo])
  accounts: AccountInfo[];
}
