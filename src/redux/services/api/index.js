import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getHeadphones: builder.query({
      query: () => "/products",
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getReviewsByHeadphonesId: builder.query({
      query: (headphoneId) => `/reviews?productId=${headphoneId}`,
      providesTags: (...result) => [{ type: "Reviews", id: result[2] }],
    }),
    getCodecsByHeadphonesId: builder.query({
      query: (headphoneId) => `/codecs?productId=${headphoneId}`,
    }),
    addReview: builder.mutation({
      query: ({ headphoneId, review }) => ({
        url: `/review/${headphoneId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: (...result) => [
        { type: "Reviews", id: result[2].headphoneId },
      ],
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useGetCodecsByHeadphonesIdQuery,
  useGetReviewsByHeadphonesIdQuery,
  useGetUsersQuery,
  useAddReviewMutation,
} = apiSlice;
