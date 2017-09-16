import fetch from 'isomorphic-fetch'

export const FETCH_TRACKS = 'FETCH_TRACKS'
export function fetchTracks(term) {
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

   // dispatch(requestPosts(subreddit))

    return fetch(`https://itunes.apple.com/search?term=${term}&media=music`)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json => {
        dispatch(receiveTracks(term, json))
      })
  }
}

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS'
function receiveTracks(term, json) {
  return {
    type: RECEIVE_TRACKS,
    term,
    tracks: json.results,
    receivedAt: Date.now()
  }
}

export const RECEIVE_TRACKDETAIL = 'RECEIVE_TRACKDETAIL'
export function receiveTrackDetail(trackid) {
  return {
    type: RECEIVE_TRACKDETAIL,
    trackid
  }
}

export const RECEIVE_RANDOMTRACKS = 'RECEIVE_RANDOMTRACKS'
export function receiveRandomTracks(count) {
  return {
    type: RECEIVE_RANDOMTRACKS,
    count: count
  }
}