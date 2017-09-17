import TrackList from './TrackList'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

it('displays the correct number of tracks in the track list', () => {
  var tracklist = [
    {trackName: '1'},
    {trackName: '2'},
    {trackName: '3'}
  ]
  var component = shallow(
    <TrackList tracks={tracklist}/>
  )

  expect(component.find('TrackItemSummary').length).toEqual(3)
  expect(component.find('.fetch__nodata').length).toEqual(0)
  })

  it('displays the no data when there are no tracks', () => {
    var tracklist = []
    var component = shallow(
      <TrackList tracks={tracklist}/>
    )
  
    expect(component.find('.fetch__nodata').length).toEqual(1)
    expect(component.find('TrackItemSummary').length).toEqual(0)
  })