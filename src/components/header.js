import React, { Component } from "react";
import RadioImg from "../images/radioImage.png";
import ExitImg from "../images/exitImage.png";
class Header extends Component {
    render() {
        return (
            <div className='headerRow'>
                <div className='headerCol'><p><img src={RadioImg} height="18px" width="18px" />ReactTracks</p></div>
                <div className='headerCol'><p>Dave</p></div>
                <div className='headerCol3'><p>SignOut<img src={ExitImg} height="15px" width="15px" /></p></div>
            </div>
        );
    }
}
export default Header;