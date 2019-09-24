import React, { Component } from 'react'
import './FeedCard.css'
import video from '../../assets/images/video.png'
import headphones from '../../assets/images/headphones.png';

class FeedCard extends Component {
  render() {

    const bg = {
      background: 'linear-gradient(225deg, rgba(0,0,0,0) 25%, rgba(255,255,255,0.35) 100%), url(' + this.props.thumbnail + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      userSelect: 'none',
    }

    let showType;

    if(this.props.type === "pod" ? showType = headphones : showType = video);

    return (
      <div className="feedCard">
        <button className="btn btn-image" style={bg}>
          <div className="play-btn">
            {/* Keeps rest in place. Change css later */}
          </div>

          <div className="btn-info">
            <div className="play-type">
              <img src={showType} alt=""/>
            </div>
            <div className="play-length">
              <p>09:27</p>
            </div>
          </div>

        </button>

        <div className="feedText">
          <h2>{this.props.header}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default FeedCard
