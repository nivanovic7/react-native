import { apiSlice } from "./baseApi";

const CHAT_URL = "chat";

export const messagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => CHAT_URL,
    }),
  }),
});
