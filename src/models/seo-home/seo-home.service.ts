import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SeoHomeDocument, SEO_HOME_NAME } from "./seo-home.schema";

@Injectable()
export class SeoHomeService {
  constructor(
    @InjectModel(SEO_HOME_NAME) public seoHomeModel: Model<SeoHomeDocument>
  ) {}
  // async getSeoHome(): Promise<SeoHome> {
  //   return this.seoHomeModel.findOne({}, {}, { sort: { createdAt: -1 } });
  // }

  // async create(
  //   createSeoHomeInput: CreateSeoHomeInput,
  //   user: User
  // ): Promise<SeoHome> {
  //   const seoHomeLast = helperService.convertMongoObject(
  //     await this.getSeoHome()
  //   );
  //   // Get diff field to history
  //   const history = helperService.getDiffObject(
  //     seoHomeLast,
  //     createSeoHomeInput
  //   );
  //   if (!history.length) {
  //     throw new GraphQLError(MSG.msg.UPDATE_NOT_DIFF);
  //   }
  //   // Create Tag
  //   const seoHome = new this.seoHomeModel({
  //     ...createSeoHomeInput,
  //     createBy: user.id,
  //     history,
  //   });
  //   const seoHomeData = await seoHome.save();
  //   // Return result
  //   return seoHomeData;
  // }

  // async entire(): Promise<SeoHome[]> {
  //   return this.seoHomeModel.find().sort({ createdAt: Constant.find.DESC });
  // }
}
