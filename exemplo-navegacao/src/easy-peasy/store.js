import { createStore } from "easy-peasy";
// import { composeWithDevTools } from "remote-redux-devtools";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { model } from "./model";

export const store = createStore(model, {
  devTools: true,
  reducerEnhancer: (reducer) =>
    persistReducer(
      {
        key: "easypeasystate",
        storage,
      },
      reducer
    ),
  // compose: composeWithDevTools({ realtime: true, trace: true }),
});
