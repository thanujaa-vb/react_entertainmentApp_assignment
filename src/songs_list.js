import { blue } from "@material-ui/core/colors";
import { Component } from "react";
import searchImage from "./searchIcon.png";
class songs_list extends Component{
    render(){
        const image='https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
        return(
            <div className='songslist'>
            <div className="box">
                <div className="box-row">
                    <div className="box-cell box1">
                        <p>1</p>
                    </div>
                    <div className="box-cell box2">
                        <img src={image}></img>
                    </div>
                    <div className="box-cell box3">
                        <h5>Com Truise - Flightwave</h5>
                        <p>Reed</p>
                    </div>
                    <div className="box-cell box4">
                        <audio controls></audio>
                    </div>
                    <div className="box-cell box5">
                        <img src='https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'></img>
                    </div>
                </div>
                
                <div className="box-row">
                    <div className="box-cell box1">
                        <p>2</p>
                    </div>
                    <div className="box-cell box2">
                        <img src={image}></img>
                    </div>
                    <div className="box-cell box3">
                       <h5>Claude Debussy - Clair de Lune</h5>
                       <p>Reed</p>
                    </div>
                    <div className="box-cell box4">
                        <audio controls></audio>
                    </div>
                    <div className="box-cell box5">
                        <img src='https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'></img>
                    </div>
                </div>
                <div className="box-row">
                    <div className="box-cell box1">
                        <p>3</p>
                    </div>
                    <div className="box-cell box2">
                        <img src={image}></img>
                    </div>
                    <div className="box-cell box3">
                        <h5>Culture Shock - Troglodyte</h5>
                        <p>Doug</p>
                    </div>
                    <div className="box-cell box4">
                        <audio controls></audio>
                    </div>
                    <div className="box-cell box5">
                        <img src='https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'></img>
                    </div>
                </div>
                <div className="box-row">
                    <div className="box-cell box1">
                        <p>3</p>
                    </div>
                    <div className="box-cell box2">
                        <img src={image}></img>
                    </div>
                    <div className="box-cell box3">
                        <h5>Tycho - Montana</h5>
                        <p>Reed</p>
                    </div>
                    <div className="box-cell box4">
                        <audio controls></audio>
                    </div>
                    <div className="box-cell box5">
                        <img src='https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'></img>
                    </div>
                </div>
                
</div>
<div className='addSongs'>
    <button>+</button>
</div>
            </div>
            
        );
    }

}
export default songs_list;