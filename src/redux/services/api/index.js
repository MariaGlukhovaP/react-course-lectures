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
      providesTags: (headphoneId) => [{ type: "Reviews", headphoneId }],
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
      invalidatesTags: ({ headphoneId }) => [{ type: "Reviews", headphoneId }],
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
