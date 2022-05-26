import { Resolver } from "@nestjs/graphql";
import { Tag } from "./dto/tag.dto";
import { TagService } from "./tag.service";

@Resolver(Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  // @Roles([Role.ADMIN])
  // @Mutation(() => Tag)
  // async tagCreate(
  //   @Args("input") input: CreateTagInput,
  //   @Context(USER_KEY) user: User
  // ): Promise<Tag> {
  //   return this.tagService.create(input, user);
  // }

  // @Roles([Role.ADMIN])
  // @Mutation(() => Tag)
  // async tagUpdate(@Args("input") input: UpdateTagInput): Promise<Tag> {
  //   return this.tagService.update(input);
  // }

  // @Query(() => OutputSearchTag)
  // async tagList(
  //   @Args("input") input: SearchTagInput
  // ): Promise<OutputSearchTag> {
  //   return this.tagService.list(input);
  // }

  // @Query(() => Tag)
  // async tagFindBySlug(@Args("input") input: FindTagBySlugInput): Promise<Tag> {
  //   return this.tagService.findOneBySlug(input.slug);
  // }

  // @Query(() => [Tag])
  // async tagEntire(@Args("input") input: EntireTagInput): Promise<Tag[]> {
  //   return this.tagService.entire(input);
  // }

  // @ResolveField()
  // async userCreate(
  //   @Parent() tagResolve: TagDocument,
  //   @Context("usersLoader") usersLoader: DataLoader<string, User>
  // ) {
  //   return usersLoader.load(tagResolve.createBy);
  // }
}
