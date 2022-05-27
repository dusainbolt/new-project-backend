import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Constant } from "src/utils/constant";
import { BlogContent } from "./dto/blog.dto";
@Schema({ timestamps: true })
export class BlogModel {
  @Prop({ unique: true, required: true })
  title: string;

  @Prop({ unique: true, required: true })
  slug: string;

  @Prop({ unique: true, required: true })
  description: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Constant.schema.USER })
  createBy: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Constant.schema.USER })
  seriesId: string;

  @Prop({
    type: [
      {
        type: { type: String },
        data: { type: String },
        language: { type: String },
      },
    ],
    required: true,
  })
  content: BlogContent[];
}

export type BlogDocument = BlogModel & Document;

export const BLOG_NAME = "Blog";

export const BlogSchema = SchemaFactory.createForClass(BlogModel);
