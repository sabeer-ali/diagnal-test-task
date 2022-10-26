import { SEARCH_LIST } from "../types";

export const addSearchAction = (data) => {
  return {
    type: SEARCH_LIST,
    data,
  };
};
