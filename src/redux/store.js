import { configureStore } from "@reduxjs/toolkit";
import { headphonesSlice } from "./entities/headphones/headphones-slice";
import { codecsSlice } from "./entities/codecs/codecs-slice";
import { reviewsSlice } from "./entities/reviews/reviews-slice";
import { usersSlice } from "./entities/users/users-slice";
import { cartSlice } from "./UI/cart/cart-slice";
import { requestSlice } from "./UI/request/request-slice";
import { apiSlice } from "./services/api";

export const store = configureStore({
  reducer: {
    [headphonesSlice.name]: headphonesSlice.reducer,
    [codecsSlice.name]: codecsSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
