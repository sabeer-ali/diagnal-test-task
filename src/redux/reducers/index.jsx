import { ADD_LIST, SEARCH_LIST } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        list: action.data,
      };
    case SEARCH_LIST:
      return {
        ...state,
        search: action.data,
      };

    default:
      return state;
  }
};
