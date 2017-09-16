import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Currency from './Currency'

it('displays the correct currency symbol', () => {
  expect(mount(<Currency currencycode='GBP' value={0.99} />).find('span').text()).toBe('£ 0.99')
  expect(mount(<Currency currencycode='USD' value={0.99} />).find('span').text()).toBe('$ 0.99')
});

it('displays nothing if the currency is negative', () => {
  expect(mount(<Currency currencycode='GBP' value={-0.99} />).find('span').text()).toBe('')
});
