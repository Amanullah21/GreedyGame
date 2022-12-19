import {
  ADD_USER_NAME,
  IS_CLOSE,
  IS_OPEN,
  DATE,
  APP,
  REQUEST,
  RESPONSE,
  RATE,
  CLICK,
  CTR,
  IMPRESSION,
  REVENUE,
  START_DATE,
  END_DATE,
} from "./actiontype";

export const date_fun = (payload) => ({
  type: DATE,
  payload,
});
export const app_fun = (payload) => ({
  type: APP,
  payload,
});
export const request_fun = (payload) => ({
  type: REQUEST,
  payload,
});
export const response_fun = (payload) => ({
  type: RESPONSE,
  payload,
});
export const click_fun = (payload) => ({
  type: CLICK,
  payload,
});
export const impression_fun = (payload) => ({
  type: IMPRESSION,
  payload,
});
export const revenue_fun = (payload) => ({
  type: REVENUE,
  payload,
});
export const rate_fun = (payload) => ({
  type: RATE,
  payload,
});
export const ctr_fun = (payload) => ({
  type: CTR,
  payload,
});

export const start_date = (payload) => ({
  type: START_DATE,
  payload,
});
export const end_date = (payload) => ({
  type: END_DATE,
  payload,
});

export const is_open = (payload) => ({
  type: IS_OPEN,
  payload,
});

export const is_close = (payload) => ({
  type: IS_CLOSE,
  payload,
});
export const add_user_name = (payload) => ({
  type: ADD_USER_NAME,
  payload,
});
