import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HashService } from "src/hash/hash.service";
import { Constant } from "src/utils/constant";
import { AppLogger } from "./../../logs/logs.service";
import { UserResolver } from "./user.resolver";
import { UserSchema } from "./user.schema";
import { UserService } from "./user.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Constant.schema.USER, schema: UserSchema },
    ]),
  ],
  providers: [UserService, UserResolver, HashService, AppLogger],
  exports: [UserService],
})
export class UsersModule {}
