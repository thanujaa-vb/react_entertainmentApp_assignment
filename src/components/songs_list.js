import { Component } from "react";
import SongCard from "./song_card";

const trackList = [
    { id: 1, like: 3, title: "Com Truise - FlightWave", subTitle: 'Reed', media: '', isLiked: false },
    { id: 2, like: 3, title: "Claude Debussy - Clair de lune", subTitle: 'Reed', media: '', isLiked: false },
    { id: 3, like: 2, title: "Culture Shock - Troglodyte", subTitle: 'Doug', media: '', isLiked: false },
    { id: 4, like: 2, title: "Tycho - Montana", subTitle: 'Reed', media: '', isLiked: false }
];
class songs_list extends Component {
    constructor() {
        super();
        this.state = {
            tracks: trackList,
            filterText: ''
        };
        this.searchTrack = this.searchTrack.bind(this);
    }

    componentDidMount() {
        this.props.searchTrack(this.searchTrack);
    }
    
    render() {
        const {data, filter} = this.state;
        return (
            <div className='songslist'>
                <div className="box">{
                    this.state.tracks.map((item) => {
                        return <SongCard onLike={this.likeTrack} onDelClick={this.deleteTrack} trackDetails={item} />
                    })
                }
                </div>
                <div className='addSongs'>
                    <button onClick={this.addNewTrack.bind(this)}>+</button>
                </div>
            </div>
        );
    }

    updatedTrack(){
        var filtered =  trackList.filter(eachData => eachData.title.toLowerCase().includes(this.state.filterText.toLowerCase().trim()));
        this.setState({ tracks: filtered });
    }

    addNewTrack() {
        var newIndex = trackList.length + 1;
        var newTrack = { id: newIndex, like: 0, title: 'Track ' + newIndex, subTitle: 'Default', media: '', isLiked: false };
        trackList.push(newTrack);
        
        this.updatedTrack();
    }

    deleteTrack = (trackDetails) => {
        var trackDetailIndex = trackList.indexOf(trackDetails);
        trackList.splice(trackDetailIndex, 1);
        this.updatedTrack();
    }

    likeTrack = (trackDetails) => {
        var likeIndex = trackList.indexOf(trackDetails);
        if(trackDetails.isLiked==false){
        trackDetails.like = trackDetails.like + 1;
        trackDetails.isLiked = true;
        }
        else{
            trackDetails.like = trackDetails.like - 1;
            trackDetails.isLiked = false;
        }
        trackList[likeIndex] = trackDetails;
        this.updatedTrack();
    }

    searchTrack(searchText) {
        this.setState({filterText: searchText});
        if (searchText.length === 0) {
            this.setState({ tracks: trackList });
        }
        else {
            const filteredTrackList = trackList.filter(eachData => eachData.title.toLowerCase().includes(searchText.toLowerCase().trim()));
            this.setState({ tracks: filteredTrackList });
        }
    }
}
export default songs_list;