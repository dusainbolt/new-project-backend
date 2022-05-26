import { InputType, Field, ObjectType } from "@nestjs/graphql";
import { Tag } from "src/models/tag/dto/tag.dto";
import { UserSkillStatus } from "./user.dto";

@ObjectType()
@InputType("AddUserSkillInput")
export class UserSkill {
  @Field({ nullable: true })
  tagId: string;

  @Field({ nullable: true })
  percent: number;

  @Field(() => UserSkillStatus, { nullable: true })
  status: UserSkillStatus;
}

@InputType()
export class UpdateUserSkill {
  @Field(() => [UserSkill])
  data: UserSkill[];
}

@ObjectType()
export class UserSkillData {
  @Field(() => Tag, { nullable: true })
  tagData: Tag | string;

  @Field({ nullable: true })
  percent: number;

  @Field(() => UserSkillStatus, { nullable: true })
  status: UserSkillStatus;
}
