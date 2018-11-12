import initialState from './initialState';

describe('initialState', () => {
  test('contains a tracks entry', () => {
    expect(initialState.tracks).toEqual({
      loading: true,
      error: false,
      tracks: [],
    });
  });
});
