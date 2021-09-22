
import { Component } from 'react';
import './App.css';
import './header.js'
import Header from './header.js';
import SearchBar from './search_bar';
import SongsList from './songs_list.js';
class App extends Component {
  render(){
    return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <SongsList/>
    </div>
  );
}
}

export default App;
