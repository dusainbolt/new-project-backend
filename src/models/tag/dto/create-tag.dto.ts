import { InputType, Field } from "@nestjs/graphql";
import { Length } from "class-validator";
import { ValidMessage } from "src/utils/valid_message";
import { TagStatus } from "./tag.dto";

@InputType()
export class CreateTagInput {
  @Length(3, 256, { message: ValidMessage.lengthMessage })
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  thumbnail: string;

  @Field(() => TagStatus) // it's very important
  status: TagStatus;
}

@InputType()
export class UpdateTagInput {
  @Field(() => CreateTagInput)
  data: CreateTagInput;

  @Field()
  tagId: string;
}
