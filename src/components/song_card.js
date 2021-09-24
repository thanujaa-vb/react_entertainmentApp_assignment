import { Component } from "react";
import afterImg from "../images/afterlike.png";
import beforeImg from "../images/beforelike.png";
class SongCard extends Component {
    render() {
        return (
            <div className="box-row">
                <div className="box-cell count">
                    <p style={{color:this.props.trackDetails.isLiked ? 'red': 'gray'}}>{this.props.trackDetails.like}</p>
                </div>
                <div className="box-cell likes">
                    <img src={this.props.trackDetails.isLiked ? afterImg : beforeImg} onClick={() => this.onLikeClick()} height="20px" width="20px"></img>
                </div>
                <div className="box-cell title">
                    <h5>{this.props.trackDetails.title}</h5>
                    <p>{this.props.trackDetails.subTitle}</p>
                </div>
                <div className="box-cell audioclip">
                    <audio controls></audio>
                </div>
                <div className="box-cell delete">
                    <img key={this.props.trackDetails.id} src='https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png' onClick={() => this.onDeleteClick()} style={{ "pointer-events": "all" }}></img>
                </div>
            </div>
        );
    }
    onDeleteClick() {
        this.props.onDelClick(this.props.trackDetails);
    }
    onLikeClick() {
        this.props.onLike(this.props.trackDetails);
    }
}
export default SongCard;