
const dummybooks = {
    allBooks: [
{
            bookName: 'bookslab',
            id: 1,
            imageUrl: 'url',
            description: String
        },
        {
            bookName: 'bookslab',
            id: 2,
            imageUrl: 'url',
            description: 'stringURL'
        },
        {
            bookName: 'bookslab',
            id: 3,
            imageUrl: 'url',
            description: 'stringURL'
        },
        {
            bookName: 'bookslab',
            id: 4,
            imageUrl: 'url',
            description: 'stringURL'
        },
        {
            bookName: 'bookslab',
            id: 5,
            imageUrl: 'url',
            description: 'stringURL'
        },
        {
            bookName: 'bookslab',
            id: 6,
            imageUrl: 'url',
            description: 'stringURL'
        },
        {
            bookName: 'bookslab',
            id: 7,
            imageUrl: 'url',
            description: 'stringURL'
        },
        {
            bookName: 'bookslab',
            id: 8,
            imageUrl: 'url',
            description: 'stringURL'
        },
        {
            bookName: 'bookslab',
            id: 9,
            imageUrl: 'url',
            description: 'stringURL'
        },
        {
            bookName: 'bookslab',
            id: 10,
            imageUrl: 'url',
            description: 'stringURL'
        },
        {
            bookName: 'bookslab',
            id: 11,
            imageUrl: 'url',
            description: 'stringURL'
        },
        {
            bookName: 'bookslab',
            id: 12,
            imageUrl: 'url',
            description: 'stringURL'
        },
        {
            bookName: 'bookslab',
            id: 13,
            imageUrl: 'url',
            description: 'stringURL'
        },
    ],
}

export const allBooks = () => {
    return dummybooks.allBooks
}

export const newBook = (book) => {
    return [...dummybooks().allBooks, book]
}

export const bookUpdate = (book) => {
    const findIndex = allBooks().findIndex(books => books.id === book.id)
    const existingBook = allBooks()[findIndex]
    let updatedBook;
    if (existingBook) {
        updatedBook = {
            ...existingBook,
            ...book
        }
        allBooks()[findIndex] = updatedBook
    }

    console.log(allBooks())


    return updatedBook
}

export const removeBook = (id) => {
    const removedBook = allBooks().filter(books => books.id !== id)
    console.log(allBooks())
    return removedBook
}

export default dummybooks