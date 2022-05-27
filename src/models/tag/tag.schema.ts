import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Constant } from "src/utils/constant";
import { TagStatus, TagType } from "./dto/tag.dto";

@Schema({ timestamps: true })
export class TagModel {
  @Prop({ unique: true, required: true })
  title: string;

  @Prop({ unique: true, required: true })
  slug: string;

  @Prop()
  description: string;

  @Prop()
  thumbnail: string;

  @Prop({ type: Number, enum: TagStatus, required: true })
  status: number;

  @Prop({
    type: Number,
    enum: TagType,
    required: true,
    default: TagType.SYSTEM,
  })
  tagType: number;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Constant.schema.USER,
    required: true,
  })
  createBy: string;
}

export type TagDocument = TagModel & Document;

export const TAG_NAME = "Tag";

export const TAG_OTHER_NAME = "tags";

export const TagSchema = SchemaFactory.createForClass(TagModel);
