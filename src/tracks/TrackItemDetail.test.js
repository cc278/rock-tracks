import TrackItemDetail from './TrackItemDetail'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

it('displays a standard track', () => {
  var component = mount(
  <TrackItemDetail 
    artwork="http://artwork"
    title="title1"
    artist="artist1"
    price={0.99}
    currencycode="USD"
    duration={136680}
    releasedate="2003-06-27T07:00:00Z"
    webdetailslink="http://weblink" />
  )

  expect(component.find('img').prop('src')).toEqual('http://artwork')
  expect(component.find('.title').text()).toEqual('title1')
  expect(component.find('.subtitle').text()).toEqual('artist1') 
  expect(component.find('.price').text()).toEqual('$ 0.99')
  expect(component.find('.duration').text()).toEqual('2:17')
  expect(component.find('.release-date').text()).toEqual('27-06-2003')
  expect(component.find('.button').prop('href')).toEqual('http://weblink')
})