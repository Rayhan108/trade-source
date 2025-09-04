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
      query: (data) => ({
        url: "/service/checkout",
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
  useMyDocQuery
} = contractorApi;
