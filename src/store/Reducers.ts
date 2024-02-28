import { ACTIONS } from "./Actions";

const reducers = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.DELETECALLBACK:
      return {
        ...state,
        deletecallback: payload,
      };
    default:
      return state;
  }
};

export default reducers;
