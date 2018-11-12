import * as types from '../actions/actionTypes';
import initialState from './initialState';
import trackReducer from './trackReducer';

describe('trackReducer', () => {
  test('LOAD_TRACKS_SUCCESS', () => {
    expect(
      trackReducer(initialState.tracks, {
        type: types.LOAD_TRACKS_SUCCESS,
        tracks: [{ key: 'value' }],
      }),
    ).toEqual({
      loading: false,
      error: false,
      tracks: [{ key: 'value' }],
    });
  });

  test('LOAD_TRACKS_FAILURE', () => {
    expect(
      trackReducer(initialState.tracks, {
        type: types.LOAD_TRACKS_FAILURE,
      }),
    ).toEqual({
      loading: false,
      error: true,
      tracks: [],
    });
  });

  test('Unsupported action returns default state', () => {
    expect(
      trackReducer(initialState.tracks, {
        type: 'UNSUPPORTED',
      }),
    ).toEqual(initialState.tracks);
  });
});
