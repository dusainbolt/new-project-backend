import { Injectable } from "@nestjs/common";
import { HashService } from "src/hash/hash.service";
import { User, UserHashToken } from "src/models/users/entity/user.entity";
import { Helper } from "src/utils/helper";
import { MSG } from "src/utils/message";
import { UserService } from "../models/users/user.service";
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private hashService: HashService
  ) {}

  async validateToken(auth: string) {
    if (auth?.split(" ")[0] !== "Bearer") {
      throw Helper.apolloError(MSG.system.INVALID_TOKEN);
    }
    const token = auth.split(" ")[1];
    try {
      const userHashToken = this.hashService.verifyJWT(token) as UserHashToken;
      const user: User = await this.userService.findById(userHashToken.id);
      if (!!!user.id) {
        throw Helper.apolloError(MSG.system.INVALID_TOKEN);
      }
      return user;
    } catch (err) {
      throw Helper.apolloError(MSG.system.INVALID_TOKEN);
    }
  }
}
