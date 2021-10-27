import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "easy-peasy";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import reportWebVitals from "./reportWebVitals";
import { store } from "./easy-peasy/store";

const queryClient = new QueryClient();
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PersistGate loading={<div>Loading</div>} persistor={persistor}>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </PersistGate>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
