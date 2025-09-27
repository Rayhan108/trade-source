import { baseApi } from '@/redux/api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // updateSpecefiqUser
    updateSpecefiqUser: builder.mutation({
      query: ({ id, userInfo }) => ({
        url: `/user/edit-profile/${id}`,
        method: "PATCH",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
    // client subscription purchase api
    subPurchase: builder.mutation({
      query: (payload) => ({
        url: `/vipMember/checkout`,
        method: "POST",
        body:payload,
      }),
      invalidatesTags: ["user"],
    }),
    // contractor subscription purchase api
    contractorSubPurchase: builder.mutation({
      query: (payload) => ({
        url: `/vipContractor/checkout`,
        method: "POST",
        body:payload,
      }),
      invalidatesTags: ["user"],
    }),

    // getSpecefiqUser
    getSpecefiqUser: builder.query({
      query: (id) => ({
        url: `/user/retrive/${id}`,
        method: "GET",
      }),
    }),
    
    getAllUser: builder.query({
      query: ({ page, role,search}) => ({
        url: `/user/allUser`,
        method: "GET",
        params: { page, role,search },
      }),
    }),
    // license
    getLicense: builder.query({
      query: () => ({
        url: `/verify/single-user-doc`,
        method: "GET",
      }),
    }),
        // delete profile
    deletProfile: builder.mutation({
      query: (userId) => ({
        url: `/user/deleteUser/${userId}`,
        method: "DELETE",
       
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useUpdateSpecefiqUserMutation,
  useGetSpecefiqUserQuery,
  useGetAllUserQuery,
  useSubPurchaseMutation,
  useContractorSubPurchaseMutation,
  useDeletProfileMutation,
  useGetLicenseQuery
} = userApi;
