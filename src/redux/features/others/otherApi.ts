import { baseApi } from '../../api/baseApi';

const otherApi = baseApi.injectEndpoints({
  endpoints: builder => ({

    // getAllArticles
    getAllArticles: builder.query({
      query: (page) => ({
        url: `/article/allArticle?page=${page}`,
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

  useBookServiceMutation,
} = otherApi;
