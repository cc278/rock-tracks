import { connect } from 'react-redux'
import TrackDetail from './TrackDetail'
import store from '../Store'
import { receiveTrackDetail,receiveRandomTracks, fetchTracks } from './store/TrackActions'

const mapStateToProps = (state, ownProps) => {
  return {
    track: state.trackReducers.track,
    trackid: +ownProps.match.params.trackid,
    randomtracks: state.trackReducers.randomtracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrackDetail: (trackid, randomCount) => {
      store.dispatch(fetchTracks('rock')).then(() => {
        store.dispatch(receiveTrackDetail(trackid))
        store.dispatch(receiveRandomTracks(randomCount))
      });
    }
  }
}
const TrackDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail)

export default TrackDetailContainer