import { InputType, Field, ObjectType } from "@nestjs/graphql";
import { User } from "../entity/user.entity";
import { QuerySelector } from "mongodb";

@InputType()
export class LoginInput {
  @Field()
  credential: string;

  @Field()
  password: string;
}

@ObjectType()
export class QueryFindUser {
  email?: QuerySelector<any>;
  // _id?: QuerySelector<any>;
  username?: QuerySelector<any>;
}
