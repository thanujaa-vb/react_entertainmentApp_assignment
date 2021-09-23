import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className='headerRow'>
                <div className='headerCol'><p>ReactTracks</p></div>
                <div className='headerCol'><p>Dave</p></div>
                <div className='headerCol'><p>SIGNOUT</p></div>
            </div>
        );
    }
}
export default Header;