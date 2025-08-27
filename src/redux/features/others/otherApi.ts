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
  }),
});

export const {
  useGetAllArticlesQuery,
  useGetSingleArticleQuery,
  useGetAllCategoryQuery,
  usePostReportMutation,
  useBookServiceMutation,
} = otherApi;
