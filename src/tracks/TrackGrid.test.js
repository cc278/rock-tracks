import TrackGrid from './TrackGrid'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

it('displays the correct number of tracks in the track grid', () => {
  var tracklist = [
    {trackName: '1'},
    {trackName: '2'},
    {trackName: '3'},
    {trackName: '4'},
    {trackName: '5'},
    {trackName: '6'},
    {trackName: '7'},
    {trackName: '8'},
    {trackName: '9'},
    {trackName: '10'},
    {trackName: '11'},
    {trackName: '12'}
  ]
  var component = shallow(
    <TrackGrid tracks={tracklist}/>
  )

    
  expect(component.find('.columns').length).toEqual(3)
  expect(component.find('.columns').at(0).find('.column').length).toEqual(5)
  expect(component.find('.columns').at(0).find('TrackItemSummary').length).toEqual(5)
  expect(component.find('.columns').at(1).find('.column').length).toEqual(5)
  expect(component.find('.columns').at(1).find('TrackItemSummary').length).toEqual(5)
  expect(component.find('.columns').at(2).find('.column').length).toEqual(2)
  expect(component.find('.columns').at(2).find('TrackItemSummary').length).toEqual(2)
  expect(component.find('.fetch__nodata').length).toEqual(0)
  })

  
it('displays the no data when there are no tracks', () => {
  var tracklist = [
  ]
  var component = shallow(
    <TrackGrid tracks={tracklist}/>
  )

  expect(component.find('.fetch__nodata').length).toEqual(1)
  expect(component.find('.columns').length).toEqual(0)
  expect(component.find('TrackItemSummary').length).toEqual(0)
  })
