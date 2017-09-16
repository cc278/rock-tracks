import React, { Component } from 'react'
import PropTypes from 'prop-types'
import strings  from '../lang.js'
import TrackItemSummary from './TrackItemSummary'

class TrackList extends Component {
  render() {
    if(this.props.tracks.length > 0) {
      var tracks = this.props.tracks.map((track, i) => {
        return <div key={i}>
         <TrackItemSummary currencycode={track.currency} title={track.trackName} artwork={track.artworkUrl100} artist={ track.artistName } price={ track.trackPrice } detailslink={'/trackdetail/'+track.trackId}></TrackItemSummary>
        </div>
      })
      return <div>{tracks}</div>
    }
    else {
      return <div className="fetch__nodata">{ strings.fetchtracks__nodata }</div>
    }
   
  }
}

TrackList.propTypes = {
  tracks: PropTypes.array
}

TrackList.defaultProps = {
  tracks: [] 
}

export default TrackList
