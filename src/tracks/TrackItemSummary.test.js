import TrackItemSummary from './TrackItemSummary'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

it('displays a standard track', () => {
  var component = mount(
  <MemoryRouter>
    <TrackItemSummary 
      artwork="http://artwork"
      title="title1"
      artist="artist1"
      price={0.99}
      currencycode="USD"
      detailslink="http://weblink" />
  </MemoryRouter> 
  )
  

  expect(component.find('img').prop('src')).toEqual('http://artwork')
  expect(component.find('.title').text()).toEqual('title1')
  expect(component.find('.artist').text()).toEqual('artist1') 
  expect(component.find('.price').text()).toEqual('$ 0.99')
  expect(component.find('.button').prop('href')).toEqual('http://weblink')
})