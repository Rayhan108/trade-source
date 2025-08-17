import { baseApi } from "../../api/baseApi";

const contractorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createContractor: builder.mutation({
      query: (userInfo) => ({
        url: `/user/create-contractor`,
        method: "POST",  
        body:userInfo,
      }),
        invalidatesTags: ['user'],
    }),
    createServices: builder.mutation({
      query: (userInfo) => ({
        url: `/service/addServices`,
        method: "POST",  
        body:userInfo,
      }),
        invalidatesTags: ['services'],
    }),

//    getSpecefiqUser: builder.query({
//       query: (id) => ({
//         url: `/user/retrive/${id}`,
//         method: "GET",  
//         // body: userInfo,
//       }),
//     }),


  }),
});   

export const {useCreateContractorMutation,useCreateServicesMutation} = contractorApi;
