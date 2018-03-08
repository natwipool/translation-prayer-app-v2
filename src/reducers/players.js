const defaultStatePlayerReducer = {
  isPlaying: false,
  index: 0
};

export default (state = defaultStatePlayerReducer, action) => {
  switch (action.type) {
    case 'IS_PLAYING_TOGGLE':
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        isPlaying: true
      }
    case 'INCREMENT_INDEX':
      return {
        ...state,
        index: state.index + 1
      };
    case 'DECREMENT_INDEX':
      return {
        ...state,
        index: state.index - 1
      };
    case 'SET_INDEX':
      return {
        ...state,
        index: action.index
      }
    default:
      return state;
  }
};