import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { ScheduleModule } from "@nestjs/schedule";
import { AuthModule } from "./auth/auth.module";
import { environment } from "./environment";
import { HashModule } from "./hash/hash.module";
import { HttpModule } from "./http.module";
import { LogsModule } from "./logs/logs.module";
import { loaderService } from "./models/loader.service";
import { ModelsModule } from "./models/models.module";
import { TagModule } from "./models/tag/tag.module";
import { TagService } from "./models/tag/tag.service";
import { UsersModule } from "./models/users/user.module";
import { UserService } from "./models/users/user.service";
import { PluginModule } from "./plugins/plugin.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [environment],
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }),
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    PluginModule,
    ModelsModule,
    GraphQLModule.forRootAsync({
      imports: [UsersModule, TagModule],
      useFactory: (userService: UserService, tagService: TagService) => ({
        playground: process.env.NODE_ENV !== "production",
        installSubscriptionHandlers: true,
        sortSchema: true,
        fieldResolverEnhancers: ["guards"],
        autoSchemaFile: "schema.gql",
        cors: {
          origin: "*",
          credentials: true,
          methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
          preflightContinue: true,
          optionsSuccessStatus: 204,
        },
        context: () => ({
          usersLoader: loaderService.userLoader(userService),
          tagsLoader: loaderService.tagLoader(tagService),
        }),
      }),
      inject: [UserService, TagService],
    }),
    // TasksModule,
    HttpModule,
    LogsModule,
    AuthModule,
    HashModule,
  ],
})
export class AppModule {}

// ____Exception filter
// providers: [
//     {
//         provide: APP_FILTER,
//         useClass: AllExceptionFilter,
//     },
// ],
