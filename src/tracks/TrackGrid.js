import React, { Component } from 'react'
import PropTypes from 'prop-types'
import strings  from '../lang.js'
import TrackItemSummary from './TrackItemSummary'

class TrackGrid extends Component {
  render() {
    if(this.props.tracks.length > 0) {
      const groupSize = 5
      var tracks = this.props.tracks.map((track, i) => {
        return <div  key={i} className="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd">
         <TrackItemSummary currencycode={track.currency} title={track.trackName} artwork={track.artworkUrl100} artist={ track.artistName } price={ track.trackPrice } detailslink={'/trackdetail/'+track.trackId}></TrackItemSummary>
        </div>
      }).reduce(function(r, element, index) {
        // create element groups with size 3, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
      }, []).map(function(rowContent, c) {
          return <div className="columns"  key={c}>{rowContent}</div>;
      })
      return <div  className="content">{tracks}</div>
    }
    else {
      return <div className="fetch__nodata">{ strings.fetchtracks__nodata }</div>
    }
   
  }
  componentDidMount() {
    this.props.fetchTracks()
  }
}

TrackGrid.propTypes = {
  tracks: PropTypes.array
}

TrackGrid.defaultProps = {
  tracks: [] 
}

export default TrackGrid
