import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Duration from './Duration'

it('displays the correct duration', () => {
  expect(mount(<Duration milliseconds={136680} />).find('span').text()).toBe('2:17')
});

it('displays nothing if the duaration is negative', () => {
  expect(mount(<Duration milliseconds={-136680} />).find('span').text()).toBe('')
});
