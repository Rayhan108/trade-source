import { baseApi } from "../../api/baseApi";

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

    // getSpecefiqUser
    getSpecefiqUser: builder.query({
      query: (id) => ({
        url: `/user/retrive/${id}`,
        method: "GET",
      }),
    }),
    
    getAllUser: builder.query({
      query: ({ page, role }) => ({
        url: `/user/allUser`,
        method: "GET",
        params: { page, role },
      }),
    }),
  }),
});

export const {
  useUpdateSpecefiqUserMutation,
  useGetSpecefiqUserQuery,
  useGetAllUserQuery,
} = userApi;
