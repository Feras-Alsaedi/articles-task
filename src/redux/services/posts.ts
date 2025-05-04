import { IGetAllPostsResponse } from "@/types";
import { apiSlice } from "../api";

const StagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<IGetAllPostsResponse, string>({
      query: (search) => {
        return {
          url: `/posts/${search ? "search" : ""}`,
          params: {
            q: search,
            limit: 0,
          },
        };
      },
    }),
    getPostDetails: builder.query<any, string>({
      query: (id) => {
        return {
          url: `/posts/${id}`,
        };
      },
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostDetailsQuery } = StagesApi;
