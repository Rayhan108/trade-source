import { baseApi } from "@/redux/api/baseApi";

const referApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // updateSpecefiqUser
    sendReferal: builder.mutation({
      query: (userInfo) => ({
        url: `/refer/send-referal`,
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),

    getReward: builder.mutation({
      query: ({ userInfo, code }) => ({
        url: `/refer/referal?code=${code}`,
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),

    referHistory: builder.query({
      query: () => ({
        url: `/refer-claim/history`,
        method: "GET",
      }),
    }),

    referClaim: builder.mutation({
      query: (info) => ({
        url: `/refer-claim/claim`,
        method: "POST",
        body:info
      }),
    }),
    getAllreferClaimed: builder.query({
      query: () => ({
        url: `/refer-claim/all-claimed`,
        method: "GET",
       
      }),
    }),

  }),
});

export const {
  useSendReferalMutation,
  useGetRewardMutation,
  useReferHistoryQuery,
  useReferClaimMutation,
  useGetAllreferClaimedQuery
} = referApi;
