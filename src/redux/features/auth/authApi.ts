import { baseApi } from '@/redux/api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // signUp
    signUp: builder.mutation({
      query: userInfo => ({
        url: '/auth/register',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // login
    login: builder.mutation({
      query: userInfo => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // changePassword
    changePassword: builder.mutation({
      query: newInfo => ({
        url: '/auth/changePassword',
        method: 'POST',
        body: newInfo,
      }),
    }),

    // forgotPassword
    forgotPassword: builder.mutation({
      query: newInfo => ({
        url: '/auth/forgotPass',
        method: 'POST',
        body: newInfo,
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


  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useLazyLoginWithGoogleQuery,
  useLazyLoginWithFacebookQuery,
  useGetOtpMutation,
  useVerifyOtpMutation,

} = authApi;
