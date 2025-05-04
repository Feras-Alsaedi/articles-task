// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

interface User {
  user: string;
}
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
const cookieUser = Cookie.get("user");

const initialState: AuthState = {
  user: cookieUser ? JSON.parse(cookieUser) : null,
  isAuthenticated: Cookie.get("user") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      Cookie.remove("user");
      state.user = null;
    },
    login: (state, action: PayloadAction<User>) => {
      console.log("asd", action.payload);

      Cookie.set("user", JSON.stringify(action.payload), { expires: 7 }); // Expires in 7 days
      state.user = { user: action.payload.user };
      state.isAuthenticated = true;
    },
  },
});

export const selectCurrentUser = (state: any): any => state.auth.user;
export const selectIsAuthenticated = (state: any): any =>
  state.auth.isAuthenticated;

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
