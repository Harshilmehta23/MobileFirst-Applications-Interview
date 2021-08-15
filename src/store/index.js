import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../Module/Login/redux";
import JokesReducer from "../Module/Jokes/redux";

const reducer = {
  auth: authReducer,
  jokes: JokesReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
