import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { User } from "../entity/user.entity";

@InputType()
export class LoginInput {
  @Field()
  credential: string;

  @Field()
  password: string;
}

@ObjectType()
export class LoginOutput {
  @Field(() => User)
  user: User;

  @Field()
  token: string;
}
