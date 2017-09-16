import React, { Component } from 'react'
import PropTypes from 'prop-types'
import strings  from '../lang.js'
import TrackItemDetail from './TrackItemDetail'
import TrackList from './TrackList'

class TrackDetail extends Component {
  render() {
    if(this.props.track) {
      var track = this.props.track
      return (
        <div className="content">
          <div className="columns">
          <div className="column is-two-thirds-desktop">
              <h2>{track.trackName}</h2>
              <TrackItemDetail 
              title={track.trackName}
              artwork={track.artworkUrl100} 
              artist={ track.artistName } 
              price={ track.trackPrice } 
              duration={ track.trackTimeMillis }
              releasedate={ track.releaseDate } 
              currencycode={ track.currency } 
              webdetailslink={ track.trackViewUrl}></TrackItemDetail>
            </div>
            <div className="column is-one-third-desktop">
              <h2>{ strings.randomtracks }</h2>
              <TrackList tracks={ this.props.randomtracks }></TrackList>
            </div>
          </div>
        </div>
      )
    }
    else {
      return <div class="fetch__nodata">{ strings.fetchtrack__nodata }</div>
    }
  }
  componentDidMount() {
    this.fetchTrackDetail()
  }
  componentDidUpdate (prevProps) {
    let oldId = +prevProps.trackid
    let newId = +this.props.match.params.trackid
    if (newId !== oldId) {
      this.fetchTrackDetail()
    }
  }
  fetchTrackDetail() {
    this.props.fetchTrackDetail(this.props.trackid, 3)
  }
}

TrackDetail.propTypes = {
  track: PropTypes.object
}

TrackDetail.defaultProps = {
  track: {}
}

export default TrackDetail
