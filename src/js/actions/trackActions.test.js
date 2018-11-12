import { loadTracksSuccess, loadTracksFailure, loadTracks } from './trackActions';

describe('trackActions', () => {
  describe('loadTracksSuccess', () => {
    test('returns an object with the `[Tracks] Load Success` type and track payload', () => {
      expect(loadTracksSuccess([])).toEqual({
        type: '[Tracks] Load Success',
        tracks: [],
      });
    });
  });

  describe('loadTracksFailure', () => {
    test('returns an object with the `[Tracks] Load Failure` type', () => {
      expect(loadTracksFailure()).toEqual({
        type: '[Tracks] Load Failure',
      });
    });
  });

  describe('loadTracks', () => {
    const dispatch = jest.fn();
    describe('with a successful response', () => {
      beforeAll(async () => {
        global.fetch = jest.fn(() => Promise.resolve({
          json: jest.fn(() => Promise.resolve({
            results: [],
          })),
        }));
        await loadTracks()(dispatch);
      });

      afterAll(() => {
        jest.clearAllMocks();
      });

      test('calls fetch', () => {
        expect(global.fetch).toHaveBeenCalled();
      });

      test('calls dispatch with loadTracksSuccess', () => {
        expect(dispatch).toHaveBeenCalledWith(loadTracksSuccess([]));
      });
    });

    describe('with a failure response', () => {
      beforeAll(async () => {
        global.fetch = jest.fn(() => new Promise((resolve, reject) => {
          reject(new Error('Error fetching data'));
        }));
        await loadTracks()(dispatch);
      });

      afterAll(() => {
        jest.clearAllMocks();
      });

      test('calls fetch', () => {
        expect(global.fetch).toHaveBeenCalled();
      });

      test('calls dispatch with loadTracksFailure', () => {
        expect(dispatch).toHaveBeenCalledWith(loadTracksFailure());
      });
    });
  });
});
