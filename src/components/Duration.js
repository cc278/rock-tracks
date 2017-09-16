import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Duration extends Component {
  render() {
    if(this.props.milliseconds >= 0) {
      return (
        <span>{ this.msToDuration( this.props.milliseconds )}</span>
      )
    }
    else {
      return <span></span>
    }
  }
  msToDuration(millis) {
    var minutes = Math.floor(millis / 60000)
    var seconds = ((millis % 60000) / 1000).toFixed(0)
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
  }
}


Duration.propTypes = {
  milliseconds: PropTypes.number.isRequired
}

Duration.defaultProps = {
  milliseconds: 0
}

export default Duration
