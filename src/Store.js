import trackReducers from "./tracks/store/TrackReducers"
import {combineReducers, createStore, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk'
let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__()
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' || !devTools) {
    devTools = a => a
}

const rootReducer = combineReducers({
  trackReducers,
})

const middleware = applyMiddleware(thunk)

const store = createStore(
  rootReducer,
  compose(middleware, devTools)
)

export default store