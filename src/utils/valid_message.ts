import { ValidationArguments } from "class-validator";

// export const ERROR_VALIDATE = "CM_ERROR";

// export const ERROR_CODE_HASH = "CM_ERROR_401";

// export const PREFIX_CODE_SYSTEM = "MSG";

// export const lengthMessage = (args: ValidationArguments) => {
//   return `${ERROR_VALIDATE}_1,${args.constraints[0]},${args.constraints[1]},${args.property}, ${args.value}`;
// };

export class ValidMessage {
  static ERROR_VALIDATE = "CM_ERROR";
  static ERROR_CODE_HASH = "CM_ERROR_401";
  static PREFIX_CODE_SYSTEM = "MSG";
  static lengthMessage = (args: ValidationArguments) => {
    return `${ValidMessage.ERROR_VALIDATE}_1,${args.constraints[0]},${args.constraints[1]},${args.property}, ${args.value}`;
  };

  static msg = {
    MSG_LOGIN_ERROR: `${ValidMessage.PREFIX_CODE_SYSTEM}_2`,
    TAG_NOT_ALLOW_TYPE: `${ValidMessage.PREFIX_CODE_SYSTEM}_3`,
    UPDATE_NOT_DIFF: `${ValidMessage.PREFIX_CODE_SYSTEM}_4`,
    ADD_SKILL_NOT_DIFF: `${ValidMessage.PREFIX_CODE_SYSTEM}_5`,
  };
}
