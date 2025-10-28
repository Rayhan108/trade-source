import { baseApi } from "@/redux/api/baseApi";

const otherApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllArticles
    getAllArticles: builder.query({
      query: (page) => ({
        url: `/article/allArticle?page=${page}`,
        method: "GET",
      }),
    }),

    // getSingleArticle
    getSingleArticle: builder.query({
      query: (id) => ({
        url: `/article/single-article/${id}`,
        method: "GET",
      }),
    }),
    // getSingleUserArticle
    getSingleUserArticle: builder.query({
      query: () => ({
        url: `/article/single-user-article`,
        method: "GET",
      }),
    }),

    // getAllCategory
    getAllCategory: builder.query({
      query: () => ({
        url: `/category/all-category`,
        method: "GET",
      }),
    }),
    // getAllREfer for spec contractor
    getAllRefer: builder.query({
      query: () => ({
        url: `/review/allReview`,
        method: "GET",
      }),
    }),

    // bookService
    bookService: builder.mutation({
      query: (body) => ({
        url: "/book/bookServices",
        method: "POST",
        body: body,
      }),
    }),
    // cancel Service
    cancelService: builder.mutation({
      query: (id) => ({
        url: `/book/cancelService/${id}`,
        method: "POST",
     
      }),
    }),

    // getUsersForSidebar
    getUsersForSidebar: builder.query({
      query: () => ({
        url: "/message/users",
        method: "GET",
      }),
      providesTags: ["messages"],
    }),

    // getMessages
    getMessages: builder.query({
      query: (userId) => ({
        url: `/message/${userId}`,
        method: "GET",
      }),
      providesTags: ["messages"],
    }),
    // get dashboard stats
    getDashboardStats: builder.query({
      query: () => ({
        url: `/quotes/dashboardStats`,
        method: "GET",
      }),
    }),

    // sendMessage
    sendMessage: builder.mutation({
      query: ({ receiverId, data }) => ({
        url: `/message/send/${receiverId}`,
        method: "POST",
        body: data,
        formData: true,
      }),
      invalidatesTags: ["messages"],
    }),

    // getNotifications
    getNotifications: builder.query({
      query: (userId) => ({
        url: `/notification/${userId}`,
        method: "GET",
      }),
      providesTags: ["notifications"],
    }),

    // markAllNotificationsAsRead
    markAllNotificationsAsRead: builder.mutation({
      query: (userId) => ({
        url: `/notification/mark-all/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["notifications", "notificationsCount"],
    }),

    // markSingleNotificationAsRead
    markSingleNotificationAsRead: builder.mutation({
      query: (noticeId) => ({
        url: `/notification/mark/${noticeId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["notifications", "notificationsCount"],
    }),

    // getUnseenNotificationCount
    getUnseenNotificationCount: builder.query<{ data: number }, string>({
      query: (userId) => ({
        url: `/notification/unseen/${userId}`,
        method: "GET",
      }),
      providesTags: ["notificationsCount"],
    }),
        getAllFees: builder.query({
      query: () => ({
        url: `/membership/getFees`,
        method: "GET",
        // params: { page, role,search },
      }),
    }),
        updateSubStatus: builder.mutation({
      query: (status) => ({
        url: `/user/updateSubscriptionStatus`,
        method: "PATCH",
        body:status
      }),
    }),
  }),
});

export const {
  useGetAllArticlesQuery,
  useGetSingleArticleQuery,
  useGetAllCategoryQuery,
useGetSingleUserArticleQuery,
  useBookServiceMutation,
  useGetUsersForSidebarQuery,
  useGetMessagesQuery,
  useSendMessageMutation,
  useGetNotificationsQuery,
  useMarkAllNotificationsAsReadMutation,
  useMarkSingleNotificationAsReadMutation,
  useGetUnseenNotificationCountQuery,
  useGetAllReferQuery,
  useGetDashboardStatsQuery,
  useGetAllFeesQuery,
  useCancelServiceMutation,
  useUpdateSubStatusMutation
} = otherApi;
