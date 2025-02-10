import { apiSlice } from "./baseApi";
const CHAT_URL = "chat";
const MESSAGE_TEXT = "message/text";

export const chatsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => CHAT_URL,
    }),
    getMessages: builder.query({
      query: (id) => `${CHAT_URL}/${id}/message`,
    }),
    sendMessage: builder.mutation({
      query: ({ message, chatId }) => ({
        url: `${CHAT_URL}/${chatId}/${MESSAGE_TEXT}`,
        method: "POST",
        body: { chatMessageUnique: chatId, chatMessageText: message },
      }),
    }),
  }),
});

export const { useGetChatsQuery, useGetMessagesQuery, useSendMessageMutation } =
  chatsApiSlice;
