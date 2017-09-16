import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Currency from '../components/Currency'

class TrackItemSummary extends Component {
  render() {
    return <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-120x120">
              <img src={ this.props.artwork } alt=""/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{ this.props.title}</p>
            <p className="subtitle is-6">{ this.props.artist }</p>
            <p className="subtitle is-4 price is-info"><Currency currencycode={ this.props.currencycode } value={this.props.price}></Currency></p>
          </div>
          
        </div>
        <Link className="is-small clearfix is-block button is-primary" to={ this.props.detailslink }>View</Link>
      </div>
    </div>
  }
  
}

TrackItemSummary.propTypes = {
  detailslink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artwork: PropTypes.string,
  artist: PropTypes.string,
  price: PropTypes.number.isRequired
}

TrackItemSummary.defaultProps = {
  title: '',
  artwork: 'http://bulma.io/images/placeholders/480x480.png',
  artist: '',
  price: 0
}

export default TrackItemSummary


