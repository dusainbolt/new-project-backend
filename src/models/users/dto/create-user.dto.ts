import { Gender } from "../entity/user.enum";
export class CreateUserDTO {
  email?: string;

  firstName?: string;

  lastName?: string;

  avatar?: string;

  password?: string;

  age?: number;

  gender?: Gender;
}
