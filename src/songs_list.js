import { blue } from "@material-ui/core/colors";
import { Component, useState } from "react";
import searchImage from "./searchIcon.png";
import SongCard from "./song_card";
class songs_list extends Component {
    
    constructor() {
        super();
        this.state = {
            'tracks': [
                { id: 1, like: 3, title: "Com Truise - FlightWave", subTitle: 'Reed', media: '' },
                { id: 2, like: 3, title: "Claude Debussy - Clair de lune", subTitle: 'Reed', media: '' },
                { id: 3, like: 2, title: "Culture Shock - Troglodyte", subTitle: 'Doug', media: '' },
                { id: 4, like: 2, title: "Tycho - Montana", subTitle: 'Reed', media: '' }
    
            ]
        };
    }
    addNewTrack() {
        var newIndex = this.state.tracks.length + 1;
       var newTrack = { id: newIndex, like: 0, title: 'Track '+ newIndex, subTitle: 'Default', media: '' };
       this.setState({tracks: [...this.state.tracks, newTrack]});
   }
   deleteTrack = (trackDetails)=>{
     this.setState({tracks: this.state.tracks.filter(item => item.id != trackDetails.id)});    
   }

   likeTrack = (trackDetails)=>{ 
      trackDetails.like= trackDetails.like + 1;
      var list = [...this.state.tracks];
      list[trackDetails.id-1]= trackDetails;
      this.setState({tracks: list});
   }
    render() {
        const image = 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
        
        return (
            <div className='songslist'>
                <div className="box">{
                    this.state.tracks.map((item) => {
                       return <SongCard  onLike= {this.likeTrack} onDelClick= {this.deleteTrack} trackDetails= {item} />
                    })
                }
                </div>
                <div className='addSongs'>
                    <button onClick={this.addNewTrack.bind(this)}>+</button>
                </div>
            </div>

        );
    }

     
}
export default songs_list;