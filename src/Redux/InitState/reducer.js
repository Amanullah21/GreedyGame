import {
  add_user_name,
  app,
  app_fun,
  click_fun,
  ctr_fun,
  date,
  date_fun,
  impression_fun,
  is_close,
  is_open,
  rate_fun,
  request_fun,
  response_fun,
  revenue_fun,
} from "./action";
import {
  ADD_USER_NAME,
  APP,
  CLICK,
  CTR,
  DATE,
  IMPRESSION,
  IS_CLOSE,
  IS_OPEN,
  RATE,
  REQUEST,
  RESPONSE,
  REVENUE,
} from "./actiontype";
import { initStates } from "./constatnt";

export const reducer = (state = initStates, { type, payload }) => {
  switch (type) {
    case DATE: {
      date_fun("date function", payload);
      return {
        ...state,
        date: payload,
      };
    }
    case APP: {
      app_fun("app function", payload);
      return {
        ...state,
        app: payload,
      };
    }

    case CLICK: {
      click_fun("click function", payload);
      return {
        ...state,
        click: payload,
      };
    }

    case RESPONSE: {
      response_fun("response function", payload);
      return {
        ...state,
        response: payload,
      };
    }

    case REQUEST: {
      request_fun("request function", payload);
      return {
        ...state,
        request: payload,
      };
    }

    case IMPRESSION: {
      impression_fun(" impression function", payload);
      return {
        ...state,
        impression: payload,
      };
    }

    case REVENUE: {
      revenue_fun("revenue function", payload);
      return {
        ...state,
        revenue: payload,
      };
    }

    case RATE: {
      rate_fun("rate function", payload);
      return {
        ...state,
        rate: payload,
      };
    }

    case CTR: {
      ctr_fun("ctr function", payload);
      return {
        ...state,
        ctr: payload,
      };
    }

    case IS_OPEN: {
      is_open("isOpen", payload);
      return {
        ...state,
        Boolean: payload,
      };
    }
    case IS_CLOSE: {
      is_close("isOpen", payload);
      return {
        ...state,
        Boolean: payload,
      };
    }

    case ADD_USER_NAME: {
      add_user_name("addUser", payload);
      return {
        ...state,
        user: payload,
      };
    }

    default: {
      return state;
    }
  }
};
