import * as types from './actionTypes';
import trackApi from '../api/trackApi';

export const loadTracksSuccess = tracks => ({ type: types.LOAD_TRACKS_SUCCESS, tracks });

export const loadTracksFailure = () => ({ type: types.LOAD_TRACKS_FAILURE });

export const loadTracks = () => dispatch => trackApi().then((tracks) => {
  dispatch(loadTracksSuccess(tracks));
}).catch(() => {
  dispatch(loadTracksFailure());
});
