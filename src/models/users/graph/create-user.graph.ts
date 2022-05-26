import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, Length } from "class-validator";
import { ValidMessage } from "src/utils/valid_message";

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(1, 18, { message: ValidMessage.lengthMessage })
  username: string;

  @Field()
  @Length(1, 25, { message: ValidMessage.lengthMessage })
  firstName: string;

  @Field()
  @Length(1, 25, { message: ValidMessage.lengthMessage })
  lastName: string;

  //   @IsEmpty()
  @Field()
  avatar: string;

  @Field()
  password: string;

  @Field()
  age: number;

  @Field()
  gender: number;

  //   @Field(() => [String])
  //   items: string[] | MongooseSchema.Types.ObjectId[];
}
