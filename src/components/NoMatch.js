import React, { Component } from 'react'
import strings  from '../lang.js'

class NoMatch extends Component {
  render() {
    return (
      <div>
        { strings.error_pathnotfound}
      </div>
     )
  }
}

export default NoMatch
