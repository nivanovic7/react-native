import { apiSlice } from "./baseApi";
const CHAT_URL = "chat";

export const chatsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => CHAT_URL,
    }),
  }),
});

export const { useGetChatsQuery } = chatsApiSlice;
