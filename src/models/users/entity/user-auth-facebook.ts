import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserAuthFacebook {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  displayName: string;

  @Field()
  token: string;

  @Field()
  avatar: string;
}
