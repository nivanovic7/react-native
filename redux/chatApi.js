import { apiSlice } from "./baseApi";
const CHAT_URL = "chat";

export const chatsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => CHAT_URL,
    }),
    getMessages: builder.query({
      query: (id) => `${CHAT_URL}/${id}/message`,
    }),
  }),
});

export const { useGetChatsQuery, useGetMessagesQuery } = chatsApiSlice;
