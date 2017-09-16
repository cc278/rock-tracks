import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment  from 'moment'

class Date extends Component {
  render() {
    if(this.props.isodate !== '') {
      return (
        <span>{ moment(this.props.isodate).format(this.props.dateformat) }</span>
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


Date.propTypes = {
  isodate: PropTypes.string.isRequired,
  dateformat: PropTypes.string
}

Date.defaultProps = {
  isodate: '',
  dateformat: 'DD/MM/YYYY'
}

export default Date
