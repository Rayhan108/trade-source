import { baseApi } from "@/redux/api/baseApi";

const quoteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // updateSpecefiqUser
    sendQuotes: builder.mutation({
      query: (info) => ({
        url: `/quotes/addQuotes`,
        method: "POST",
        body: info,
      }),
    }),
  }),
});

export const { useSendQuotesMutation } = quoteApi;
