import { baseApi } from '../../api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // updateSpecefiqUser
    updateSpecefiqUser: builder.mutation({
      query: ({ id, userInfo }) => ({
        url: `/user/edit-profile/${id}`,
        method: 'PATCH',
        body: userInfo,
      }),
      invalidatesTags: ['user'],
    }),

    // getSpecefiqUser
    getSpecefiqUser: builder.query({
      query: id => ({
        url: `/user/retrive/${id}`,
        method: 'GET',
        // body: userInfo,
      }),
    }),
  }),
});

export const { useUpdateSpecefiqUserMutation, useGetSpecefiqUserQuery } =
  userApi;
