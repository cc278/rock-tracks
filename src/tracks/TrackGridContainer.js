import { connect } from 'react-redux'
import TrackGrid from './TrackGrid'
import store from '../Store'
import { fetchTracks } from './store/TrackActions'

const mapStateToProps = (state) => {
  return {
    tracks: state.trackReducers.tracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => {
      store.dispatch(fetchTracks('rock'))
    }
  }
}

const TrackGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackGrid)

export default TrackGridContainer