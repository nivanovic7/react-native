import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import isTokenExpired from "../utils/helpers";
// import { logOut, setCredentials } from "../slices/authSlice";

const REFRESH_TOKEN_URL = " auth/refresh-token";

const API_URL = "https://laterz.api.exebyte.io/api/";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken;
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const { accessToken } = api.getState().auth;

  if (result?.error?.originalStatus === 401 && isTokenExpired(accessToken)) {
    const refreshToken = api.getState().auth.refreshToken;
    const refreshResult = await baseQuery(
      { url: REFRESH_TOKEN_URL, refreshToken },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refreshResult.data.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
