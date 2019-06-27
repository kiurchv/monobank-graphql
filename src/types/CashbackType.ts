import { registerEnumType } from "type-graphql";

export enum CashbackType {
  MILES = "Miles",
  NONE = "None",
  UAH = "UAH"
}

registerEnumType(CashbackType, {
  name: "CashbackType",
  description: "TODO"
});
