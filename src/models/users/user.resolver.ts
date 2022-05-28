import { Args, Query, Resolver } from "@nestjs/graphql";
import { User } from "./entity/user.entity";
import { SearchUserInput } from "./graph/search-user.graph";
import { UserService } from "./user.service";
@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async searchUser(@Args("input") input: SearchUserInput): Promise<User[]> {
    return await this.userService.findAll();
    // return this.userService.listSkill(input);
  }

  // @Mutation(() => User)
  // async createUser(@Args("input") input: CreateUserInput): Promise<User> {
  //   return await this.userService.create(input);
  // }
  // @Mutation(() => LoginOutput)
  // async loginUser(@Args("input") input: LoginInput): Promise<LoginOutput> {
  //   // Check is exist user
  //   let user = await this.userService.findOne({
  //     $or: [{ username: input.credential }, { email: input.credential }],
  //   });
  //   if (!user) {
  //     throw Helper.apolloError(MSG.logic.INVALID_USER);
  //   }
  //   return { user, token: "EXAMPLE" };
  // }

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
