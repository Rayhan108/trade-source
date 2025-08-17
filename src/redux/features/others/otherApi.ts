import { baseApi } from "../../api/baseApi";

const otherApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // createContractor: builder.mutation({
    //   query: (userInfo) => ({
    //     url: `/user/create-contractor`,
    //     method: "POST",  
    //     body:userInfo,
    //   }),
    //     invalidatesTags: ['user'],
    // }),

   getAllCategory: builder.query({
      query: () => ({
        url: `/category/all-category`,
        method: "GET",  
        // body: userInfo,
      }),
    }),


  }),
});   

export const {useGetAllCategoryQuery} = otherApi;
