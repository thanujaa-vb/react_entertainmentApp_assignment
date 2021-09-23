import { Component } from "react";
import searchImage from "../images/searchIcon.png";
class SearchBar extends Component {
    render() {
        return (
            <div className='searchInputs'>
                <div>
                    <input onChange={this.inputValue.bind(this)} type='text' placeholder='Search All Tracks' />
                    <img src={searchImage} alt="image" height="20px" width="20px"></img>
                </div>
            </div>
        );
    }
    inputValue(event) {
        this.props.searchCallback(event.target.value);
    }
}
export default SearchBar;