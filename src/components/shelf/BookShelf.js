import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'



 const BookShelf = (props) => {
  const {books, changeShelf } = props

        return (
          <ol className="books-grid">
            {books.map(book => 
            <Book
             key={book.id}
             book={book}
             books={books}
             changeShelf={changeShelf} />
            )}
          </ol>
        )
    }

    BookShelf.propTypes = {
      books: PropTypes.array.isRequired,
      changeShelf: PropTypes.func.isRequired
  }


export default BookShelf