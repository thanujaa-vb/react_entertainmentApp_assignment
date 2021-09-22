import { Component } from "react";
import searchImage from "./searchIcon.png";
class SearchBar extends Component{
render(){
    return(
        
            <div className='searchInputs'>
                <div>
            <input type='text' placeholder='Search All Tracks'/>
                <img src={searchImage} alt="image" height="20px" width="20px"></img>
            </div>
            </div>
            
    );
}
}
export default SearchBar ;