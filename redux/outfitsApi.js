import { apiSlice } from "./baseApi";

const OUTFITS_URL = "outfits";
const CREATE_OUTFIT_URL = "outfits/new";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOutfits: builder.query({
      query: () => ({
        url: OUTFITS_URL,
        body: {
          offset: 2,
          limit: 2,
        },
      }),
    }),
    createOutfit: builder.mutation({
      query: (post) => ({
        url: CREATE_OUTFIT_URL,
        body: post,
        method: "POST",
        prepareHeaders: (headers) => {
          headers.set("Content-Type", "multipart/form-data");
          return headers;
        },
      }),
    }),

    createComment: builder.mutation({
      query: (payload) => {
        return {
          url: `${OUTFITS_URL}/${payload.postId}/comment`,
          body: { comment: payload.comment },
          method: "POST",
        };
      },
    }),
  }),
});

export const {
  useGetOutfitsQuery,
  useCreateOutfitMutation,
  useCreateCommentMutation,
} = authApiSlice;
