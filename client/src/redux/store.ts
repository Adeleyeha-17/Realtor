import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./user/userSlice";

export type RootState = ReturnType<typeof store.getState>;

 
export const store = configureStore({
   reducer: {user: userReducer},
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false
      }),
});
