import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Duration from '../components/Duration'
import Date from '../components/Date'
import Currency from '../components/Currency'

class TrackItemDetail extends Component {
  render() {
    return <div className="card">
      <div className="card-content">
        <div className="columns is-desktop">
          <div className="column is-half-desktop">
            <figure className="image is-120x120">
              <img src={ this.props.artwork } alt=""/>
            </figure>
          </div>
          <div className="column is-half-desktop">
            <p className="title is-4">{ this.props.title}</p>
            <p className="subtitle is-6">{ this.props.artist }</p>
            <hr/>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Price</label>
              </div>
              <div className="field-body">
                <div className="field-input-label is-pull-left is-normal">
                  <label className="label"><Currency value={this.props.price} currencycode={this.props.currencycode}></Currency></label>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Duration</label>
              </div>
              <div className="field-body">
                <div className="field-input-label is-pull-left is-normal">
                  <label className="label"><Duration milliseconds={ this.props.duration }></Duration></label>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Release Date</label>
              </div>
              <div className="field-body">
                <div className="field-input-label is-pull-left is-normal">
                  <label className="label"><Date isodate={ this.props.releasedate } dateformat="DD-MM-YYYY"></Date></label>
                </div>
              </div>
            </div>
            <a className="is-small m-t is-block button is-primary" href={ this.props.webdetailslink }>More Details</a>
          </div>
        </div>
      </div>
    </div>
  }
  
}

TrackItemDetail.propTypes = {
  webdetailslink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artwork: PropTypes.string,
  artist: PropTypes.string,
  price: PropTypes.number.isRequired,
  duration: PropTypes.number,
  releasedate: PropTypes.string,
  currencycode : PropTypes.string
}

TrackItemDetail.defaultProps = {
  webdetailslink: '',
  title: '',
  artwork: 'http://bulma.io/images/placeholders/480x480.png',
  artist: '',
  duration: 0,
  releasedate: '',
  price: 0,
  currencycode: 'GBP'
}

export default TrackItemDetail


