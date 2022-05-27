import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Constant } from "src/utils/constant";
import { HistoryField, SeoHomeImage, SeoHomeSocial } from "./dto/seo-home.dto";
@Schema({ timestamps: { updatedAt: false } })
export class SeoHomeModel {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  titleEN: string;

  @Prop()
  descriptionEN: string;

  @Prop()
  domain: string;

  @Prop()
  siteName: string;

  @Prop()
  searchBoxUrl: string;

  @Prop()
  facebookChatPlugin: string;

  @Prop()
  reason: string;

  @Prop({
    type: {
      facebookAppId: { type: String },
      facebookPageUrl: { type: String },
      youtubeUrl: { type: String },
      twitterUrl: { type: String },
    },
    default: {},
  })
  social: SeoHomeSocial;

  @Prop({
    type: {
      faviconUrlICO: { type: String },
      faviconUrlJPG: { type: String },
      logo400x400: { type: String },
      logo800x600: { type: String },
      logo1280x720: { type: String },
      logoAlt: { type: String },
      logoAltEN: { type: String },
    },
    default: {},
  })
  image: SeoHomeImage;

  @Prop({
    type: [
      {
        key: { type: String },
        newValue: { type: String },
        oldValue: { type: String },
      },
    ],
    default: [],
  })
  history: HistoryField[];

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Constant.schema.USER,
    required: true,
  })
  createBy: string;
}

export type SeoHomeDocument = SeoHomeModel & Document;

export const SEO_HOME_NAME = "SeoHome";

export const SeoHomeSchema = SchemaFactory.createForClass(SeoHomeModel);
