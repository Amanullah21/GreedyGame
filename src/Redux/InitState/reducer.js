import {
  add_token_id,
  add_user_name,
  add_user_photo,
  remove_token_id,
  remove_user_name,
  remove_user_photo,
  is_close,
  is_open
} from "./action";
import {
  ADD_TOKEN_ID,
  ADD_USER_NAME,
  ADD_USER_PHOTO,
  REMOVE_TOKEN_ID,
  REMOVE_USER_NAME,
  REMOVE_USER_PHOTO,
  IS_CLOSE,
  IS_OPEN
} from "./actiontype";
import { initStates } from "./constatnt";

export const reducer = (state = initStates, { type, payload }) => {
  switch (type) {
    // case IS_OPEN: {
    //   is_open("isOpen", payload);
    //   return {
    //     ...state,
    //     close:payload
    //   };
    // }
    // case IS_CLOSE: {
    //   is_close("isOpen", payload);
    //   return {
    //     ...state,
    //     close:payload
    //   };
    // }
    case ADD_TOKEN_ID: {
      add_token_id("addtokenid", payload);
      return {
        ...state,
        token: payload,
      };
    }
    case REMOVE_TOKEN_ID: {
      remove_token_id("addtokenid");
      return {
        ...state,
        token: "",
      };
    }

    case ADD_USER_NAME: {
      add_user_name("addUser", payload);
      return {
        ...state,
        user: payload,
      };
    }

    case REMOVE_USER_NAME: {
      remove_user_name("removeUser", payload);
      return {
        ...state,
        user: "GreenDuck",
      };
    }

    case ADD_USER_PHOTO: {
      add_user_photo("addUserPhoto", payload);
      return {
        ...state,
        user: payload,
      };
    }
    case REMOVE_USER_PHOTO: {
      remove_user_photo("removeUserPhoto", payload);
      return {
        ...state,
        user: "",
      };
    }

    default: {
      return state;
    }
  }
};
