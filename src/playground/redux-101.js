import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import transPrayersData from '../data/transPrayersData';

// SET_TRANS_PRAYER
const setTransPrayer = (transPrayers = []) => ({
  type: 'SET_TRANS_PRAYER',
  transPrayers
});
// ADD_PLAYLIST,
const addPlaylist = ({ description = '', lists = [] }) => ({
  type: 'ADD_PLAYLIST',
  playlist: {
    id: uuid(),
    description,
    lists
  }
});
// EDIT_PLAYLIST,
const editPlaylist = (id, updates) => ({
  type: 'EDIT_PLAYLIST',
  id,
  updates
});
// REMOVE_PLAYLIST
const removePlaylist = ({ id } = {}) => ({
  type: 'REMOVE_PLAYLIST',
  id
});

// SET_LISTS_FILTERS
const setListsFilters = (lists = []) => ({
  type: 'SET_LISTS_FILTERS',
  lists
});

// IS_PLAYING_TOGGLE
const isPlayingToggle = () => ({
  type: 'IS_PLAYING_TOGGLE'
});
// SET_PLAYING
const setPlaying = () => ({
  type: 'SET_PLAYING'
})
// INCREMENT_INDEX
const addIdex = () => ({
  type: 'INCREMENT_INDEX'
});
// DECREMENT_INDEX
const minusIdex = () => ({
  type: 'DECREMENT_INDEX'
});
// SET_INDEX
const setIndex = (index = 0) => ({
  type: 'SET_INDEX',
  index
});

// transPrayers Reducer
const transPrayersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRANS_PRAYER':
      return [...state, ...action.transPrayers];
    default:
      return state;
  }
};
// playlists Reducer
const playlistsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return [...state, action.playlist];
    case 'REMOVE_PLAYLIST':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PLAYLIST':
      return state.map(playlist => {
        if (playlist.id === action.id) {
          return {
            ...playlist,
            ...action.updates
          };
        } else {
          return playlist;
        }
      });
    default:
      return state;
  }
};

const filtersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_LISTS_FILTERS':
      return [...state, action.lists];
    default:
      return state;
  }
};

// Player Reducer creation
const defaultStatePlayerReducer = {
  isPlaying: false,
  index: 0
};

const playerReducer = (state = defaultStatePlayerReducer, action) => {
  switch (action.type) {
    case 'IS_PLAYING_TOGGLE':
      return {
        isPlaying: !state.isPlaying
      };
    case 'SET_PLAYING':
      return {
        isPlaying: true
      }
    case 'INCREMENT_INDEX':
      return {
        index: state.index + 1
      };
    case 'DECREMENT_INDEX':
      return {
        index: state.index - 1
      };
    case 'SET_INDEX':
      return {
        index: action.index
      }
    default:
      return state;
  }
};

const getFullPlaylistData = (transPrayers, lists) => {
  return lists.map(list =>
    transPrayers.filter(transPrayer => transPrayer.precept === list)
  );
};

// Store creation
const store = createStore(
  combineReducers({
    transPrayers: transPrayersReducer,
    playlists: playlistsReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  const getFullPlaylist = getFullPlaylistData(state.transPrayers, [
    'ท๎วัตติงสาการปาฐะ',
    'อภิณหปัจจเวกขณปาฐะ'
  ]);
  console.log(getFullPlaylist);
});

store.dispatch(setTransPrayer(transPrayersData));

const playlistOne = store.dispatch(
  addPlaylist({
    description: 'Playlist one',
    lists: ['ท๎วัตติงสาการปาฐะ', 'อภิณหปัจจเวกขณปาฐะ']
  })
);
const playlistTwo = store.dispatch(
  addPlaylist({
    description: 'Playlist two',
    lists: ['ท๎วัตติงสาการปาฐะ', 'อภิณหปัจจเวกขณปาฐะ']
  })
);

// store.dispatch(removePlaylist({ id: playlistOne.playlist.id }))

// const playlistUpdated = store.dispatch(editPlaylist(
//   playlistTwo.playlist.id, { description: 'Update desc', lists: ['ธาตุปัจจเวกขณปาฐะ', 'ปฏิจจสมุปปาทธัมมะ'] })
// )

store.dispatch(setListsFilters(playlistTwo.playlist.lists));

////////////////////////
const demoState = {
  transPrayers: [
    {
      id: '1',
      precept: 'precept of translation prayer',
      category: 'some category',
      filename: 'some file name',
      duration: 0,
      lyrics: ['123', '234']
    }
  ],
  playlists: [
    {
      id: 'adfsfwrsdffd',
      description: 'name of playlist',
      lists: ['precept01', 'precept02', 'precept03']
    }
  ]
};
