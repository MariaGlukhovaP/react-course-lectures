import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByHeadphoneId } from "./get-reviews-by-headphone-id";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getReviewsByHeadphoneId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const { selectById: selectReviewById, selectIds: selectReviewsIds } =
  entityAdapter.getSelectors((state) => state.reviews);
