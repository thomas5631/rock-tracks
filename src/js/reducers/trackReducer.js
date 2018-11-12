import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.tracks, action) => {
  switch (action.type) {
    case types.LOAD_TRACKS_SUCCESS:
      return ({
        ...state,
        loading: false,
        error: false,
        tracks: action.tracks,
      });
    case types.LOAD_TRACKS_FAILURE:
      return ({
        ...state,
        loading: false,
        error: true,
      });
    default: return state;
  }
};
