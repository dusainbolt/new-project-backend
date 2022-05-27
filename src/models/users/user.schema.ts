import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Gender, Role, UserStatus } from "./entity/user.enum";

@Schema({ timestamps: true })
export class UserModel {
  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ unique: true })
  username: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  avatar: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  phone: string;

  @Prop()
  gender: Gender;

  @Prop()
  facebook: string;

  @Prop()
  provider: string;

  // @Prop([
  //   {
  //     tagId: {
  //       type: MongooseSchema.Types.ObjectId,
  //       ref: "tags",
  //     },
  //     percent: { type: Number },
  //     status: { type: Number, enum: UserSkillStatus },
  //   },
  // ])
  // skills: UserSkill[];

  @Prop({ type: [], default: [Role.USER] })
  roles: [Role];

  @Prop({ default: UserStatus.ACTIVE })
  status: UserStatus;
}

export type UserDocument = UserModel & Document;

export const UserSchema = SchemaFactory.createForClass(UserModel);
