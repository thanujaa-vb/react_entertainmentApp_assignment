
import { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import SearchBar from './components/search_bar.js';
import SongsList from './components/songs_list.js';
class App extends Component {
  constructor() {
    super();
    this.state = { "searchText": "" };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar searchCallback={(e) => this.searchCall(e)} />
        <SongsList searchText={this.state.searchText} setClick={click => this.searchCall = click} />
      </div>
    );
  }
}
export default App;
