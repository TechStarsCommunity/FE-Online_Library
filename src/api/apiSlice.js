import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => "/books",
            providesTags: ["Books"],
        }),
        getBookByName: builder.query({
            query: (book) => `books/search?q=${book}`,
        }),
        addNewBook: builder.mutation({
            query: (newbook) => ({
                url: "/books",
                method: "POST",
                body: newbook,
            }),
            invalidatesTags: ["Books"],
        }),
        updateBook: builder.mutation({
            query: (book) => ({
                url: `/books/${book.id}`,
                method: "PATCH",
                body: book,
            }),
            invalidatesTags: ["Books"],
        }),
        deleteBook: builder.mutation({
            query: ({ id }) => ({
                url: `/book/${id}`,
                method: "DELETE",
                body: id,
            }),
            invalidatesTags: ["Books"],
        }),
    }),
});

export const {
    useGetAllBooksQuery,
    useGetBookByNameQuery,
    useAddNewBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = booksApi;
