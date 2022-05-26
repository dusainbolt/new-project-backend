import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Gender, Role, UserStatus } from "./user.enum";

@ObjectType()
export class User {
  @Field(() => ID)
  id?: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  avatar: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  facebook: string;

  @Field(() => Gender)
  gender: Gender;

  @Field(() => [Role])
  roles: Role[];

  @Field(() => UserStatus)
  status: UserStatus;

  @Field({ nullable: true })
  createdAt?: string;

  @Field({ nullable: true })
  updatedAt?: string;
}

export type UserHashToken = {
  id: string;

  username: string;

  email: string;

  roles: Role[];
};
