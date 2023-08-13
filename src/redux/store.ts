import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/reducers";

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
