import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // login
    login: builder.mutation({
      query: userInfo => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // signUp
    signUp: builder.mutation({
      query: userInfo => ({
        url: '/auth/register',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // getOtp
    getOtp: builder.mutation({
      query: userInfo => ({
        url: '/user/auth/forget-password/send-otp',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // verifyOtp
    verifyOtp: builder.mutation({
      query: userInfo => ({
        url: '/user/auth/verify-otp',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // loginWithGoogle
    loginWithGoogle: builder.query({
      query: () => ({
        url: '/user/auth/google',
        method: 'GET',
        // body: userInfo,
      }),
    }),

    // loginWithFacebook
    loginWithFacebook: builder.query({
      query: () => ({
        url: '/user/auth/facebook',
        method: 'GET',
        // body: userInfo,
      }),
    }),

    // getAllUser
    getAllUser: builder.query({
      query: () => ({
        url: `/user/allUser`,
        method: 'GET',
        // body: userInfo,
      }),
    }),

    // changePass
    changePass: builder.mutation({
      query: info => ({
        url: `/user/auth/change-password`,
        method: 'POST',
        body: info,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useLazyLoginWithGoogleQuery,
  useLazyLoginWithFacebookQuery,
  useChangePassMutation,
  useGetOtpMutation,
  useVerifyOtpMutation,
  useGetAllUserQuery,
} = authApi;
