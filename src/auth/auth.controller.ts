import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserAuthFacebook } from "src/models/users/entity/user-auth-facebook";

@Controller("auth")
export class AuthController {
  @UseGuards(AuthGuard("facebook-token"))
  @Get("facebook")
  async getTokenAfterFacebookSignIn(@Req() req) {
    const user: UserAuthFacebook = req.user;
    console.log("user: ", req.user);
  }
}
