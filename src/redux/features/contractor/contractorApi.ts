import { baseApi } from "@/redux/api/baseApi";

const contractorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // createContractor
    createContractor: builder.mutation({
      query: (userInfo) => ({
        url: "/user/create-contractor",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),

    // createServices
    createServices: builder.mutation({
      query: (userInfo) => ({
        url: "/service/addServices",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["services"],
    }),

    // getAllServices
    getAllServices: builder.query({
      query: ({ categoryName, page, limit, search, type }) => ({
        url: "/service/allServices",
        method: "GET",
        params: { categoryName, page, limit, search, type },
      }),
      providesTags: ["services"],
    }),

    // getSingleService
    getSingleService: builder.query({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
    }),
    // getSingleUserService
    getSingleUserService: builder.query({
      query: () => ({
        url: `/service/spec-user-services`,
        method: "GET",
      }),
    }),
    // getSingleService
    giveReport: builder.mutation({
      query: ({ id, info }) => ({
        url: `/user/report/${id}`,
        method: "PATCH",
        body: info,
      }),
    }),

    // makePayment
    makePayment: builder.mutation({
      query: ({data,id}) => ({
        url: `/service/checkout/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["payments"],
    }),
    // doc verification
    verifyDoc: builder.mutation({
      query: (data) => ({
        url: "/verify/document",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["document"],
    }),
    //my doc 
    myDoc: builder.query({
      query: () => ({
        url: "/verify/single-user-doc",
        method: "GET",
   
      }),
   
    }),
    //my doc 
    singleQuote: builder.query({
      query: (id) => ({
        url: `/quotes/quote/${id}`,
        method: "GET",
   
      }),
   
    }),
    //my order
    bookedOrderforContractor: builder.query({
      query: () => ({
        url: `/book/myOrder`,
        method: "GET",
   
      }),
   
    }),
    //my quotes
    myQuotes: builder.query({
      query: () => ({
        url: "/quotes/myQuotes",
        method: "GET",
   
      }),
   
    }),
    //single book order
    singleOrder: builder.query({
      query: (id) => ({
        url: `/book/booked/${id}`,
        method: "GET",
   
      }),
   
    }),
    //update quotes status
    updateQuoteStatus: builder.mutation({
      query: ({id,data}) => ({
        url:`/quotes/update-status/${id}`,
        method: "PATCH",
        body:data
   
      }),
   
    }),
    //update project status
    updateProjectStatus: builder.mutation({
      query: ({id,status}) => ({
        url:`/book/booked/${id}`,
        method: "PATCH",
        params:{status}
   
      }),
   
    }),
    //update accept or reject
    updateAcceptOrReject: builder.mutation({
      query: ({id,status}) => ({
        url:`/book/update-status/${id}`,
        method: "PATCH",
        params:{status}
   
      }),
   
    }),
    //update contractor
    updateContractor: builder.mutation({
      query: ({id,data}) => ({
        url:`/user/edit-contractor-profile/${id}`,
        method: "PATCH",
        body:data
      
   
      }),
   
    }),

    //give review
    giveReview: builder.mutation({
      query: (payload) => ({
        url:`/user/addReview`,
        method: "POST",
        body:payload
      }),
   
    }),
    //give review
    allReview: builder.query({
      query: (userId) => ({
        url:`/user/allReview/${userId}`,
        method: "GET",
    
      }),
   
    }),
  }),
});

export const {
  useCreateContractorMutation,
  useCreateServicesMutation,
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  useMakePaymentMutation,
  useGiveReportMutation,
  useGetSingleUserServiceQuery,
  useVerifyDocMutation,
  useMyDocQuery,
  useMyQuotesQuery,
  useUpdateQuoteStatusMutation,
  useSingleQuoteQuery,
  useBookedOrderforContractorQuery,
  useSingleOrderQuery,
  useUpdateProjectStatusMutation,
  useUpdateAcceptOrRejectMutation,
  useUpdateContractorMutation,
  useGiveReviewMutation,
  useAllReviewQuery

} = contractorApi;
