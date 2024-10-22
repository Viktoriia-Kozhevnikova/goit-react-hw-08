import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from '/src/redux/auth/operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
      builder
        //   .addCase(register.fulfilled, (state, action) => {
        //       state.user = action.payload.user;
        //       state.token = action.payload.token;
        //       state.isLoggedIn = true;
        //   })
        //   .addCase(login.fulfilled, (state, action) => {
        //       state.user = action.payload.user;
        //       state.token = action.payload.token;
        //       state.isLoggedIn = true;
        //   })
          .addCase(logout.fulfilled, () => initialState)
          .addCase(refresh.fulfilled, (state, action) => {
              state.user.email = action.payload.email;
              state.user.name = action.payload.name;
              state.isLoggedIn = true;
              state.isRefreshing = false;
          })
          .addCase(refresh.pending, (state) => {
              state.isRefreshing = true;
          })
          .addCase(refresh.rejected, (state) => {
              state.isRefreshing = false;
          })
          .addMatcher(
              isAnyOf(
                  register.fulfilled,
                  login.fulfilled 
              ),
              (state, action) => {
                  state.user = action.payload.user;
                  state.token = action.payload.token;
                  state.isLoggedIn = true;
              }
          );
  },
});

export const authReduser = slice.reducer;