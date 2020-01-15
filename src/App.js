import React from 'react'
import {Route, Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import BookList from './components/shelf/BookList'
import SearchPage from './components/SearchPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    bookCollection: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(bookCollection => this.setState({bookCollection: bookCollection}))
  }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf)
    .then(response => {
      changedBook.shelf = shelf
      this.setState(prevState => ({
        bookCollection: prevState.bookCollection
        .filter(books => books.id !== changedBook.id)
        .concat(changedBook)
      }))
    })
  }
  

  render() {
    return (
    <div className="app">
      <Route exact path="/" render={() => (
      <div className="list-books">
        <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <BookList
         books={this.state.bookCollection}
         changeShelf={this.changeShelf} />

      <Link to="/search">
        <div className="open-search">
        <button>Add a book</button></div>
      </Link>
      </div>
      )}/>

    <Route path="/search" component={SearchPage} />
    </div>
    )
  }
}

export default BooksApp
