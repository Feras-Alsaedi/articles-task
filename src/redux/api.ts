import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookie from "js-cookie";

const apiLink = process.env.NEXT_PUBLIC_HOST_API;

const baseQuery = fetchBaseQuery({
  baseUrl: apiLink,
  prepareHeaders: (headers, { getState }: any) => {},
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result: any = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    Cookie.remove("refresh");
    Cookie.remove("token");
    window.location.href = "/auth/login";
  }
  if (result?.error?.status === 403) {
    console.log("sending refresh token");
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
  tagTypes: ["User"],
});
