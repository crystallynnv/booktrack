import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddBooksPage from '../AddBooksPage/AddBooksPage';
import EditBookPage from '../EditBookPage/EditBookPage';
import * as booksAPI from '../../services/book-api';
import * as userAPI from '../../services/user-api';
import NavBar from '../../components/NavBar/NavBar';
import BookListPage from '../BookListPage/BookListPage';
import SearchPage from '../SearchPage/SearchPage';

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userAPI.getUser(),
    books: [],
    searchedBooks: [],
    searchedWord: ""
  };

  /*--------------------------- Callback Methods ---------------------------*/

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }

  handleAddBook = async newBookData => {
    const newBook = await booksAPI.create(newBookData);
    this.setState(state => ({
      books: [...state.books, newBook]
    }), () => this.props.history.push('/'));
  }

  handleUpdateBook = async updatedBookData => {
    const updatedBook = await booksAPI.update(updatedBookData);
    const newBooksArray = this.state.books.map(b => b._id === updatedBookData._id ? updatedBook : b);
      this.setState({books: newBooksArray},
        () => this.props.history.push('/'));
  }

  handleDeleteBook = async id => {
    await booksAPI.deleteOne(id);
    this.setState(state => ({
      books: state.books.filter(b => b._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleSearch = (e) => {
    this.setState({searchedWord: e},
      () => {this.setState({searchedBooks: this.state.books.filter((book) => book.company.toLowerCase().includes(this.state.searchedWord.toLowerCase()))})}
      )
  }

  handleReturnSearch = () => {
    if(this.state.searchedBooks.length > 0){
      return this.state.searchedBooks
    } else {
      return this.state.books
    }
  }

  /*-------------------------- Lifecycle Methods ---------------------------*/

  async componentDidMount() {
    const books = await booksAPI.getAll();
    this.setState({books});
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        </nav>
        </header>
        <main>
        <Switch>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
            <Route exact path='/' render={({history, location}) =>
              <BookListPage 
              books={this.state.books}
              handleDeleteBook={this.handleDeleteBook}
              user={this.state.user}
              history={history}
              location={location}
              handleSearch={this.handleSearch}
              searchedWord={this.state.searchedWord}
              />
            }/>
            
          <Route exact path='/addBooks' render={() => 
            // userAPI.getUser() ? 
              <AddBooksPage handleAddBook={this.handleAddBook}/>
            
          }/>
          <Route exact path='/editBook' render={({history, location}) =>
            <EditBookPage 
            handleUpdateBook={this.handleUpdateBook}
            location={location}
            />
          }/>
          <Route exact path='/search' render={({history, location}) =>
            <SearchPage 
              books={this.handleReturnSearch()}
              handleDeleteBook={this.handleDeleteBook}
              user={this.state.user}
              history={history}
              location={location}
              handleSearch={this.handleSearch}
              searchedWord={this.state.searchedWord}
            />
          }/>
          
        </Switch>
        </main>
      </div>
    );
  }
}

export default App;
