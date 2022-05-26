import { Resolver } from "@nestjs/graphql";
import { SeoHomeService } from "./seo-home.service";
@Resolver()
export class SeoHomeResolver {
  constructor(private readonly seoHomeService: SeoHomeService) {}

  // @Query(() => SeoHome)
  // async seoHome(): Promise<SeoHome> {
  //   return this.seoHomeService.getSeoHome();
  // }

  // @Roles([Role.ADMIN])
  // @Mutation(() => SeoHome)
  // async seoHomeCreate(
  //   @Args("input") input: CreateSeoHomeInput,
  //   @Context(USER_KEY) user: User
  // ): Promise<SeoHome> {
  //   return this.seoHomeService.create(input, user);
  // }

  // @Roles([Role.ADMIN])
  // @Query(() => [SeoHome])
  // async seoHomeEntire(): Promise<SeoHome[]> {
  //   return this.seoHomeService.entire();
  // }
}
