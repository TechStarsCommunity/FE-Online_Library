import { createSlice } from "@reduxjs/toolkit";
import allBooks from "./dummyBooks";
const initialState = allBooks();

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getAllBooksHandler: (state) => {
            state.allBooks = initialState;
            // getAllbook logic
        },
        getBookByNameHandler: () => {
            // search book by name logic
        },
        addNewBookHandler: () => {
            //add new book logic
        },

        upadateBookHandler: () => {
            // upate existing book logic
        },
        deleteBookHandler: (state, action) => {
            // delete books logic
            const allBooks = state.allBooks.filter((books) => books !== action.payload.id);
            state.allBooks = allBooks;
        },
    },
});

export const { getAllBooks, getBookByName, addNewBook, upadateBook } = bookSlice.actions;

export default bookSlice.reducer;
