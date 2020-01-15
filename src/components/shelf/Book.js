import React from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'
import noCover from '../images/no-cover-image.png'

const Book = (props) => {

        const {book, books, changeShelf} = props

        const coverImages = book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : noCover

        return (
        <li>
        <div className="book">
        <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, 
        backgroundImage: `url(${coverImages})` }}></div>
        
        <ShelfChanger
         book={book}
         books={books}
         changeShelf={changeShelf}  />
        </div>
         <div>
         <div className="book-title">{book.title}</div>
         <div className="book-authors">{book.authors}</div>
        </div> 
      </div>
    </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Book
