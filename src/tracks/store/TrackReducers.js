import { RECEIVE_TRACKS, RECEIVE_TRACKDETAIL, RECEIVE_RANDOMTRACKS } from './TrackActions'
import { shuffle } from '../../util/shuffle'

const TrackReducers = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACKS: 
    return Object.assign({}, state, {
      tracks: action.tracks.slice()
    })
    case RECEIVE_TRACKDETAIL: 
    var track = state.tracks.find((x) => x.trackId === action.trackid)
    return Object.assign({}, state, {
      track
    })
    case RECEIVE_RANDOMTRACKS:  
    return Object.assign({}, state, {
      randomtracks: shuffle(state.tracks.slice(), action.count)
    })
    default:
      return state
  }
}

export default TrackReducers