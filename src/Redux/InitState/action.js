import {
  ADD_TOKEN_ID,
  REMOVE_TOKEN_ID,
  ADD_USER_NAME,
  REMOVE_USER_NAME,
  ADD_USER_PHOTO,
  REMOVE_USER_PHOTO,
  // IS_CLOSE,
  // IS_OPEN
} from "./actiontype";

export const add_token_id = (payload) => ({
  type: ADD_TOKEN_ID,
  payload,
});

export const remove_token_id = (payload) => ({
  type: REMOVE_TOKEN_ID,
  payload,
});

export const add_user_name = (payload) => ({
  type: ADD_USER_NAME,
  payload,
});

export const remove_user_name = (payload) => ({
  type: REMOVE_USER_NAME,
  payload,
});

export const add_user_photo = (payload) => ({
  type: ADD_USER_PHOTO,
  payload,
});

export const remove_user_photo = (payload) => ({
  type: REMOVE_USER_PHOTO,
  payload,
});
