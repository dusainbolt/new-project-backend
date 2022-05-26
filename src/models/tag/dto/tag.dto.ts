import { Field, ID, ObjectType } from "@nestjs/graphql";
import { registerEnumType } from "@nestjs/graphql";
// import { User } from "src/models/users/dto/user.dto";

export enum TagStatus {
  HIDE,
  ACTIVE,
}

export enum TagType {
  SYSTEM,
  ADDITION,
}

registerEnumType(TagStatus, {
  name: "TagStatus",
  description: "The TagStatus.",
});

registerEnumType(TagType, {
  name: "TagType",
  description: "The TagType.",
});

@ObjectType()
export class Tag {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  title: string;

  @Field()
  slug: string;

  @Field()
  createBy: string;

  @Field()
  thumbnail: string;

  @Field()
  description: string;

  @Field(() => TagStatus)
  status: TagStatus;

  @Field(() => TagType)
  tagType: TagType;

  @Field()
  createdAt?: string;

  @Field()
  updatedAt?: string;

  // @Field()
  // userCreate?: User;
}
