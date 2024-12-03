import { configureStore } from "@reduxjs/toolkit";
import { headphonesSlice } from "./entities/headphones/headphones-slice";
import { codecsSlice } from "./entities/codecs/codecs-slice";
import { reviewsSlice } from "./entities/reviews/reviews-slice";
import { usersSlice } from "./entities/users/users-slice";

export const store = configureStore({
  reducer: {
    [headphonesSlice.name]: headphonesSlice.reducer,
    [codecsSlice.name]: codecsSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
});
