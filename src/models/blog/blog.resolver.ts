import { Resolver } from "@nestjs/graphql";
import { BlogService } from "./blog.service";
import { Blog } from "./dto/blog.dto";

@Resolver(() => Blog)
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  // @Mutation(() => Blog)
  // async blogCreate(@Args("input") input: CreateBlogInput): Promise<Blog> {
  //   return this.blogService.create(input);
  // }

  // @Mutation(() => Blog)
  // async blogUpdate(@Args("input") input: UpdateBlogInput): Promise<Blog> {
  //   return this.blogService.update(input);
  // }
}
