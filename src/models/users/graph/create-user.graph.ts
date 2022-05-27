import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, Length } from "class-validator";
import { MSG } from "src/utils/message";

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(1, 18, { message: MSG.validLength })
  username: string;

  @Field()
  @Length(1, 25, { message: MSG.validLength })
  firstName: string;

  @Field()
  @Length(1, 25, { message: MSG.validLength })
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
