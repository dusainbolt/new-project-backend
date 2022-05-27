import { TagService } from "./tag/tag.service";
import * as DataLoader from "dataloader";
import { UserService } from "./users/user.service";
import { Tag } from "./tag/dto/tag.dto";
import { User } from "./users/entity/user.entity";
import { Helper } from "src/utils/helper";

class LoaderService {
  responseLoader(models, ids: string[]) {
    const modelsMap = Helper.mapFromArray(models, (model: any) => model.id);
    return ids.map((id) => modelsMap[id]);
  }
  userLoader(userService: UserService) {
    return new DataLoader<string, User>(async (ids: string[]) => {
      // const users = await userService.findByIds(ids);
      return this.responseLoader("users" as any, ids);
    });
  }
  tagLoader(tagService: TagService) {
    return new DataLoader<string, Tag>(async (ids: string[]) => {
      // const tags = await tagService.findByIds(ids);
      return this.responseLoader("tags" as any, ids);
    });
  }
}

export const loaderService = new LoaderService();
