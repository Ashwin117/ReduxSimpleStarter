import React from 'react';
import { Component } from 'react';

import BookList from '../components/book-list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<BookList />
      </div>
    );
  }
}
