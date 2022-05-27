import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserAuthFacebook } from "src/models/users/entity/user-auth-facebook";
import { Helper } from "src/utils/helper";

@Controller("auth")
export class AuthController {
  @UseGuards(AuthGuard("facebook-token"))
  @Get("facebook")
  async getTokenAfterFacebookSignIn(@Req() req) {
    const user: UserAuthFacebook = req.user;
    return Helper.apiOk(user);
  }
}
