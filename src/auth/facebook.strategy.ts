import { Injectable } from "@nestjs/common";
import * as FacebookTokenStrategy from "passport-facebook-token";
// import { use } from "passport";
import { HttpService } from "@nestjs/axios";
import { UserAuthFacebook } from "src/models/users/entity/user-auth-facebook";
import { PassportStrategy } from "@nestjs/passport";
@Injectable()
export class FacebookStrategy extends PassportStrategy(
  FacebookTokenStrategy,
  "facebook-token"
) {
  constructor(private readonly http: HttpService) {
    super(
      {
        clientID: "337403978525891",
        clientSecret: "ebe8a5ff563e418b2bc5922690821ba4",
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: any
      ) => {
        const { data } = await this.http
          .get(
            `https://graph.facebook.com/me/picture?type=large&access_token=${accessToken}&redirect=false`
          )
          .toPromise();

        const user: UserAuthFacebook = {
          id: profile.id,
          email: profile.emails[0].value,
          displayName: profile.displayName,
          token: accessToken,
          avatar: data.url,
        };

        return done(null, user);
      }
    );
  }
}

// export class FacebookStrategy {
//   constructor(private readonly http: HttpService) {
//     this.init();
//   }
//   init() {
//     use(
//       new FacebookTokenStrategy(
//         {
//           clientID: "337403978525891",
//           clientSecret: "ebe8a5ff563e418b2bc5922690821ba4",
//         },
//         async (
//           accessToken: string,
//           refreshToken: string,
//           profile: any,
//           done: any
//         ) => {
//           const { data } = await this.http
//             .get(
//               `https://graph.facebook.com/me/picture?type=large&access_token=${accessToken}&redirect=false`
//             )
//             .toPromise();

//           const user: UserAuthFacebook = {
//             id: profile.id,
//             email: profile.emails[0].value,
//             displayName: profile.displayName,
//             token: accessToken,
//             avatar: data.url,
//           };

//           return done(null, user);
//         }
//       )
//     );
//   }
// }
