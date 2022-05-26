import { Resolver } from "@nestjs/graphql";
import { User } from "./dto/user.dto";
import { UserService } from "./user.service";
@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // @Mutation(() => User)
  // async userCreate(@Args("input") input: CreateUser): Promise<User> {
  //   return this.userService.create(input);
  // }

  // @Mutation(() => LoginOutput)
  // async userLogin(@Args("input") input: LoginInput): Promise<LoginOutput> {
  //   return this.userService.login(input);
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
