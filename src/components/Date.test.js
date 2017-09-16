import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Date from './Date'

it('displays the correct formatted date', () => {
  expect(mount(<Date isodate="2003-06-27T07:00:00Z" dateformat="DD/MM/YYYY" />).find('span').text()).toBe('27/06/2003')
});

it('displays nothing if the iso date is empty', () => {
  expect(mount(<Date isodate="" dateformat="DD/MM/YYYY" />).find('span').text()).toBe('')
});
