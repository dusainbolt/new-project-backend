import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HashService } from "src/hash/hash.service";
import { AppLogger } from "./../../logs/logs.service";
import { UserResolver } from "./user.resolver";
import { UserSchema, USER_NAME } from "./user.schema";
import { UserService } from "./user.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: USER_NAME, schema: UserSchema }]),
  ],
  providers: [UserService, UserResolver, HashService, AppLogger],
  exports: [UserService],
})
export class UsersModule {}
