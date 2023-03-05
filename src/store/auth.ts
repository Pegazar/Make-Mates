import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any | false;
}

const initialState: AuthState = {
  //@ts-ignore
  user: JSON.parse(localStorage.getItem("user")) ?? false
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = false;
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;


