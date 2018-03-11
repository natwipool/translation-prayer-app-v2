import {
  isPlayingToggle,
  setPlaying,
  incrementIndex,
  decrementIndex,
  setIndex
} from '../../actions/players';

test('should setup isPlayingToggle correctly', () => {
  const action = isPlayingToggle();
  expect(action).toEqual({
    type: 'IS_PLAYING_TOGGLE'
  })
});

test('should setup setPlaying with default value correctly', () => {
  const action = setPlaying();
  expect(action).toEqual({
    type: 'SET_PLAYING',
    boolean: false
  })
});

test('should setup setPlaying with boolean value correctly', () => {
  const action = setPlaying(true);
  expect(action).toEqual({
    type: 'SET_PLAYING',
    boolean: true
  })
});

test('should setup incrementIndex correctly', () => {
  const action = incrementIndex();
  expect(action).toEqual({
    type: 'INCREMENT_INDEX'
  });
});

test('should setup decrementIndex correctly', () => {
  const action = decrementIndex();
  expect(action).toEqual({
    type: 'DECREMENT_INDEX'
  });
});

test('should setup setIndex with default value correctly', () => {
  const action = setIndex()
  expect(action).toEqual({
    type: 'SET_INDEX',
    index: 0
  });
});

test('should setup setIndex with a value correctly', () => {
  const action = setIndex(21)
  expect(action).toEqual({
    type: 'SET_INDEX',
    index: 21
  });
});