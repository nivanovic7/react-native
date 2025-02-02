import { apiSlice } from "./baseApi";

const OUTFITS_URL = "outfits";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOutfits: builder.query({
      query: () => OUTFITS_URL,
    }),
  }),
});

export const { useGetOutfitsQuery } = authApiSlice;
