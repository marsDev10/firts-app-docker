import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

const { VITE_API_KEY, VITE_API_URL, VITE_ORIGIN_URL } = import.meta.env;
import { RootState } from "./store";

const baseQuery = fetchBaseQuery({
  baseUrl: VITE_API_URL, 
  credentials: "include",
  prepareHeaders: async (headers, { getState }) => {
    try {
      headers.set("api-key", VITE_API_KEY);
      
      const state = getState() as RootState;
      const token = state?.auth?.token || localStorage.getItem("token");

      if (token) {
        headers.set("authorization", token);
      }

      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      headers.set("User-Agent", "AdryoXperience");
      headers.set("Origin", VITE_ORIGIN_URL);

      return headers;
    } catch (err) {
      console.error("Error preparing headers", err);
      return headers;
    }
  },
}) as BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>;

export const apiSlice = createApi({
  baseQuery,
  keepUnusedDataFor: 1,
  tagTypes: ["auth"],
  endpoints: (builder) => ({}),
});