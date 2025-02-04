import { apiSlice } from "./baseApi";

const GET_USER_SETTINGS_API = "user/settings/getUser";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserSettings: builder.query({
      query: () => GET_USER_SETTINGS_API,
    }),
  }),
});

export const { useGetUserSettingsQuery } = userApi;
