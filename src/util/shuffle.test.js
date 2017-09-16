import { shuffle } from './shuffle'

it('shuffles a collections with no duplicates', () => {
  var shuffle1 = shuffle([1,2,3,4])
  expect(shuffle1.length == 4).toBe(true)
  expect(new Set(shuffle1).size === shuffle1.length).toBe(true) // for duplicates ( not IE 10 compatible )

  var shuffle2 = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
  expect(shuffle2.length === 20).toBe(true)
  expect(new Set(shuffle2).size === shuffle2.length).toBe(true) // for duplicates ( not IE 10 compatible )
});

it('shuffles a collections with no duplicates and returns the first two shuffled values', () => {
  var shuffle1 = shuffle([1,2,3,4],2)
  expect(shuffle1.length === 2).toBe(true)
  expect(new Set(shuffle1).size === shuffle1.length).toBe(true) // for duplicates ( not IE 10 compatible )

  var shuffle2 = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],10)
  expect(shuffle2.length === 10).toBe(true)
  expect(new Set(shuffle2).size === shuffle2.length).toBe(true) // for duplicates ( not IE 10 compatible )
});
