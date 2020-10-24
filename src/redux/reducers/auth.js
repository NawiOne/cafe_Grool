import {
  logoutAction,
  loginAction,
  registerAction,
  clearStatusAction,
  pending,
  rejected,
  fulfilled,
} from "../actions/actionTypes";
const initialState = {
  token: null,
  user: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  status: null,
  isLogin: false,
  error: null,
};

const logout = (state = initialState, { type, payload }) => {
  switch (type) {
    case logoutAction:
      return {
        ...state,
        isLogin: false,
        user: {},
        status: null,
        isFulfilled: false,
      };

    case loginAction + pending:
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case loginAction + rejected:
      return {
        ...state,
        isRejected: true,
        isPending: false,
        isFulfilled: false,
      };
    case loginAction + fulfilled:
      if (payload.data.isSuccess) {
        return {
          ...state,
          isPending: false,
          isRejected: false,
          isFulfilled: true,
          user: payload.data.data,
          status: payload.data,
          isLogin: true,
          error: null,
        };
      } else {
        return {
          ...state,
          isPending: false,
          isRejected: false,
          isFulfilled: true,
          user: payload.data.data,
          status: payload.data,
          error: payload.data.data,
          isLogin: false,
        };
      }

      case registerAction + pending:
        return {
          ...state,
          isPending: true,
          isRejected: false,
          isFulfilled: false,
        };
      case registerAction + rejected:
        return {
          ...state,
          isRejected: true,
          isPending: false,
          isFulfilled: false,
        };
    case registerAction + fulfilled:
        return {
            ...state,
            isRejected: false,
          isPending: false,
          isFulfilled: true,
          status: payload.data.isSuccess,
          error: null
        }
    case clearStatusAction:
        return {
            ...state,
            error: null,
            status: null,
        }

    default:
      return state;
  }
};
export default logout;
