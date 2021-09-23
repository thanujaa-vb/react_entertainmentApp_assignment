import { Component } from "react";
import searchImage from "./searchIcon.png";

class SongCard extends Component {
    render() {
        const image = 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
        return (
            <div className="box-row">
                <div className="box-cell box1">
                    <p>{this.props.trackDetails.like}</p>
                </div>
                <div className="box-cell box2">
                    <img src={image} onClick={() => this.onLikeClick()}></img>
                </div>
                <div className="box-cell box3">
                    <h5>{this.props.trackDetails.title}</h5>
                    <p>{this.props.trackDetails.subTitle}</p>
                </div>
                <div className="box-cell box4">
                    <audio controls></audio>
                </div>
                <div className="box-cell box5">
                    <img key={this.props.trackDetails.id} src='https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png' onClick={() => this.onDeleteClick()} style={{ "pointer-events": "all" }}></img>
                </div>
            </div>
        );
    }

    onDeleteClick() {
        prompt('child delete');
        this.props.onDelClick(this.props.trackDetails);
    }
    onLikeClick() {

        this.props.onLike(this.props.trackDetails);
    }
}
export default SongCard;