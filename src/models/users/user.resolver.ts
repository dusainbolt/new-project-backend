import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthenticationError } from "apollo-server";
import { ValidMessage } from "src/utils/valid_message";
import { User } from "./entity/user.entity";
import { CreateUserInput } from "./graph/create-user.graph";
import { LoginInput, LoginOutput } from "./graph/login-user.graph";
import { UserService } from "./user.service";
import { AuthGuard } from "@nestjs/passport";
@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args("input") input: CreateUserInput): Promise<User> {
    return await this.userService.create(input);
  }
  // @UseGuards(AuthGuard("facebook-token"))
  @Mutation(() => LoginOutput)
  async loginUser(@Args("input") input: LoginInput): Promise<LoginOutput> {
    // Check is exist user
    let user = await this.userService.findOne({
      $or: [{ username: input.credential }, { email: input.credential }],
    });
    if (!user) {
      throw new AuthenticationError(ValidMessage.msg.MSG_LOGIN_ERROR);
    }
    return { user, token: "EXAMPLE" };
  }

  // @Query(() => [UserSkillData])
  // async userSkills(
  //   @Args("input") input: FindUserInput
  // ): Promise<UserSkillData[]> {
  //   return this.userService.listSkill(input);
  // }

  // @Roles([Role.ADMIN])
  // @Mutation(() => Boolean)
  // async userAddSkill(
  //   @Args("input") input: UserSkill,
  //   @Context(USER_KEY) user: UserDocument
  // ): Promise<Boolean> {
  //   return this.userService.addSkill([input], user);
  // }

  // @Roles([Role.ADMIN])
  // @Mutation(() => Boolean)
  // async userUpdateSkill(
  //   @Args("input") input: UpdateUserSkill,
  //   @Context(USER_KEY) user: UserDocument
  // ): Promise<Boolean> {
  //   return this.userService.updateSkill(input.data, user);
  // }
}
