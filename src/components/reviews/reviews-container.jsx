"use client";

import { Reviews } from "./reviews";
import {
  useAddReviewMutation,
  useGetReviewsByHeadphonesIdQuery,
  useGetUsersQuery,
} from "../../redux/services/api";
import { useCallback } from "react";

export const ReviewsContainer = ({ headphoneId }) => {
  const { data, isFetching: isGetReviewsFetching } =
    useGetReviewsByHeadphonesIdQuery(headphoneId);
  useGetUsersQuery();

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({ headphoneId, review });
    },
    [addReview, headphoneId]
  );

  if (isGetReviewsFetching || isAddReviewLoading) {
    return "...loading";
  }

  if (!data.length) {
    return null;
  }

  return <Reviews reviews={data} onAddReview={handleAddReview} />;
};
