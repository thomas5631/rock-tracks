import trackApi from './trackApi';

describe('trackApi', () => {
  let result;
  describe('data fetch success', () => {
    beforeAll(async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: jest.fn(() => Promise.resolve({
          results: [{ key: 'value' }],
        })),
      }));
      result = await trackApi();
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    test('calls fetch with `https://itunes.apple.com/search?term=rock&media=music`', () => {
      expect(global.fetch).toHaveBeenCalledWith('https://itunes.apple.com/search?term=rock&media=music');
    });

    test('resolves the results', () => {
      expect(result).toEqual([{ key: 'value' }]);
    });
  });

  describe('data fetch failure', () => {
    beforeAll(async () => {
      global.fetch = jest.fn(() => new Promise((resolve, reject) => {
        reject(new Error('Error fetching data'));
      }));
      try {
        await trackApi();
      } catch (err) {
        result = err;
      }
    });

    test('calls fetch with `https://itunes.apple.com/search?term=rock&media=music`', () => {
      expect(global.fetch).toHaveBeenCalledWith('https://itunes.apple.com/search?term=rock&media=music');
    });

    test('rejects the error', () => {
      expect(result).toEqual(new Error('Error fetching data'));
    });
  });
});
