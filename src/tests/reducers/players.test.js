import playersReducer from '../../reducers/players';

test('should setup default player reducer value', () => {
  const state = playersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    isPlaying: false,
    index: 0,
    closePlayer: false
  });
});

test('should toggle isPlaying correctly', () => {
  const player = {
    isPlaying : true,
    index: 0
  }
  const state = playersReducer(player, { type: 'IS_PLAYING_TOGGLE' });
  expect(state).toEqual({
    isPlaying: false,
    index: 0
  });
});

test('should set isPlaying', () => {
  const player = {
    isPlaying : true,
    index: 10
  }
  const state = playersReducer(player, { type: 'SET_PLAYING', boolean: false });
  expect(state).toEqual({
    isPlaying: false,
    index: 10
  });
});

test('should increment index', () => {
  const player = {
    isPlaying : true,
    index: 10
  }
  const state = playersReducer(player, { type: 'INCREMENT_INDEX' });
  expect(state).toEqual({
    isPlaying: true,
    index: 11
  });
});

test('should decrement index', () => {
  const player = {
    isPlaying : true,
    index: 10
  }
  const state = playersReducer(player, { type: 'DECREMENT_INDEX' });
  expect(state).toEqual({
    isPlaying: true,
    index: 9
  });
});

test('should set index', () => {
  const index = 21;
  const state = playersReducer(undefined, { type: 'SET_INDEX', index });
  expect(state).toEqual({
    isPlaying: false,
    index: 21,
    closePlayer: false
  });
});
