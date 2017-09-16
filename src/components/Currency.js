import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Currency extends Component {
  render() {
    if(this.props.value >= 0) {
      return (
        <span>{ this.currencySymbol(this.props.currencycode) } {this.props.value}</span>
      )
    }
    else {
      return <span></span>
    }
  }
  currencySymbol(currencyCode) {
    switch(currencyCode) {
      case 'GBP' : 
        return '£'
      case 'USD' : 
        return '$' 
      default : 
        return '' 
    }
  }
}


Currency.propTypes = {
  currencycode: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

Currency.defaultProps = {
  currencycode: 'GBP',
  value: 0
}

export default Currency
