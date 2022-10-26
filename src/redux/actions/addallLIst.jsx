import { ADD_LIST } from "../types";

export const addListsAction = (data) => {
  return {
    type: ADD_LIST,
    data,
  };
};
