import { InputType, Field } from "@nestjs/graphql";
import { Length } from "class-validator";
import { ValidMessage } from "src/utils/valid_message";
import { BlogContent } from "./blog.dto";

@InputType()
export class CreateBlogInput {
  @Length(10, 256, { message: ValidMessage.lengthMessage })
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  thumbnail: string;

  @Field(() => [BlogContent])
  contents: BlogContent[];

  @Field(() => [String])
  tags: string[];
}

@InputType()
export class UpdateBlogInput {
  @Field(() => CreateBlogInput)
  data: CreateBlogInput;

  @Field()
  blogId: string;
}