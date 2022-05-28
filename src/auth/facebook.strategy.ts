// import { use } from "passport";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import * as FacebookTokenStrategy from "passport-facebook-token";
import { OAuth2Facebook } from "src/models/users/dto/oauth2-facebook.dto";
import { UserSocial } from "src/models/users/entity/user-social.entity";
import { SocialType } from "src/models/users/entity/user.enum";
import { Constant } from "src/utils/constant";
@Injectable()
export class FacebookStrategy extends PassportStrategy(
  FacebookTokenStrategy,
  Constant.imports.FACEBOOK_STRATEGY
) {
  constructor(private readonly configService: ConfigService) {
    super(
      {
        clientID: configService.get(Constant.env.FACEBOOk_APP_ID),
        clientSecret: configService.get(Constant.env.FACEBOOk_APP_SECRET),
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: OAuth2Facebook,
        done: any
      ) => {
        const userSocial: UserSocial = {
          socialId: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          name: profile.displayName,
          avatar: profile.url,
          socialType: SocialType.FACEBOOK,
        };
        return done(null, userSocial);
      }
    );
  }
}
