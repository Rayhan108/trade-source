import { baseApi } from '../../api/baseApi';

const otherApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // createContractor
    // createContractor: builder.mutation({
    //   query: (userInfo) => ({
    //     url: `/user/create-contractor`,
    //     method: "POST",
    //     body:userInfo,
    //   }),
    //     invalidatesTags: ['user'],
    // }),

    // getAllArticles
    getAllArticles: builder.query({
      query: () => ({
        url: '/article/allArticle',
        method: 'GET',
      }),
    }),

    // getSingleArticle
    getSingleArticle: builder.query({
      query: id => ({
        url: `/article/single-article/${id}`,
        method: 'GET',
      }),
    }),

    // getAllCategory
    getAllCategory: builder.query({
      query: () => ({
        url: `/category/all-category`,
        method: 'GET',
      }),
    }),

    // postReport
    postReport: builder.mutation({
      query: ({ formData, contractorId }) => ({
        url: `/user/report/${contractorId}`,
        method: 'PATCH',
        body: formData,
      }),
    }),

    // bookService
    bookService: builder.mutation({
      query: body => ({
        url: '/book/bookServices',
        method: 'POST',
        body: body,
      }),
    }),

    // getUsersForSidebar
    getUsersForSidebar: builder.query({
      query: () => ({
        url: '/message/users',
        method: 'GET',
      }),
      providesTags: ['messages'],
    }),

    // getMessages
    getMessages: builder.query({
      query: userId => ({
        url: `/message/${userId}`,
        method: 'GET',
      }),
      providesTags: ['messages'],
    }),

    // sendMessage
    sendMessage: builder.mutation({
      query: ({ receiverId, data }) => ({
        url: `/message/send/${receiverId}`,
        method: 'POST',
        body: data,
        formData: true,
      }),
      invalidatesTags: ['messages'],
    }),
  }),
});

export const {
  useGetAllArticlesQuery,
  useGetSingleArticleQuery,
  useGetAllCategoryQuery,
  usePostReportMutation,
  useBookServiceMutation,
  useGetUsersForSidebarQuery,
  useGetMessagesQuery,
  useSendMessageMutation,
} = otherApi;
