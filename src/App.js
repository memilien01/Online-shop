import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';


import Navbar from './Navbar';
import MediaCard from './ProductCard';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        
        
        <MediaCard />
      </div>
    );
  }
}

export default App;