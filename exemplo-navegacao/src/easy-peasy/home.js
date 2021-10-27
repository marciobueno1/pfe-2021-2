import { action } from "easy-peasy";

export const home = {
  page: 1,
  setPage: action((state, payload) => {
    state.page = payload;
  }),
};
