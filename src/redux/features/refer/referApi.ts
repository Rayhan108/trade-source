import { baseApi } from '@/redux/api/baseApi';

const referApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // updateSpecefiqUser
    sendReferal: builder.mutation({
      query: (userInfo ) => ({
        url: `/refer/send-referal`,
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
    
    getReward: builder.mutation({
      query: ({userInfo,code}) => ({
        url: `/refer/referal?code=${code}`,
        method: "POST",
        body:userInfo,
      }),
      invalidatesTags: ["user"],
    }),

 
  }),
});

export const {
  useSendReferalMutation,
  useGetRewardMutation

} = referApi;
