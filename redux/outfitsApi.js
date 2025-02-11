import { apiSlice } from "./baseApi";

const OUTFITS_URL = "outfits";
const CREATE_OUTFIT_URL = "outfits/new";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOutfits: builder.query({
      query: () => OUTFITS_URL,
    }),
    createOutfit: builder.mutation({
      query: (post) => ({
        url: CREATE_OUTFIT_URL,
        body: post,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetOutfitsQuery, useCreateOutfitMutation } = authApiSlice;
