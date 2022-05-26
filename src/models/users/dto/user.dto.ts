import { ValidMessage } from "../../../utils/valid_message";
import { IsEmail, Length } from "class-validator";
import { Field, ObjectType, ID, InputType } from "@nestjs/graphql";
import { UserSkill } from "./skill-user.dto";

import { registerEnumType } from "@nestjs/graphql";

export enum Role {
  USER,
  ADMIN,
  CREATOR,
}

registerEnumType(Role, {
  name: "Role",
  description: "The role of user",
});

export enum UserStatus {
  ACTIVE,
  INACTIVE,
  PAUSE,
  BLOCK,
}

registerEnumType(UserStatus, {
  name: "UserStatus",
  description: "The status of user",
});

export enum UserSkillStatus {
  ACTIVE,
  INACTIVE,
}

registerEnumType(UserSkillStatus, {
  name: "UserSkillStatus",
  description: "The skill status of user",
});

export enum Gender {
  MALE,
  FEMALE,
  OTHER,
}

registerEnumType(Gender, {
  name: "Gender",
  description: "The gender of user",
});

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

  @Field(() => [UserSkill])
  skills: UserSkill[];

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

@InputType()
export class InitUser {
  @IsEmail()
  email: string;

  @Field()
  username: string;

  @Length(1, 25, { message: ValidMessage.lengthMessage })
  firstName: string;

  @Length(1, 25, { message: ValidMessage.lengthMessage })
  lastName: string;

  @Field()
  avatar?: string;

  @Field()
  password: string;

  @Field()
  phone: string;

  @Field()
  facebook: string;

  @Field(() => Number)
  gender: Gender;

  @Field(() => [Number])
  roles: number[];
}

@InputType()
export class FindUserInput {
  @Field()
  credential: string;
}

export class UserHashToken {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  roles: Role[];
}
