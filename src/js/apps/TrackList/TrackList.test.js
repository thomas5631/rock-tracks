import React from 'react';
import { shallow } from 'enzyme';
import TrackList from './TrackList';
import Track from './Track';

describe('<TrackList />', () => {
  let component;

  describe('on loading', () => {
    beforeAll(() => {
      component = shallow(
        <TrackList
          tracks={[]}
          loading
          error={false}
        />,
      );
    });

    test('displays a h1 element containing `Rock Tracks`', () => {
      expect(component.find('h1').text()).toEqual('Rock Tracks');
    });

    test('a loading indicator is shown on the page', () => {
      expect(component.find('.loading').text()).toEqual('Loading...');
    });
  });

  describe('on error', () => {
    beforeAll(() => {
      component = shallow(
        <TrackList
          tracks={[]}
          loading={false}
          error
        />,
      );
    });

    test('displays a h1 element containing `Rock Tracks`', () => {
      expect(component.find('h1').text()).toEqual('Rock Tracks');
    });

    test('an error indicator is shown on the page', () => {
      expect(component.find('.error').text()).toEqual('Sorry, an error has occurred. Try refreshing the page');
    });
  });

  describe('with a track list', () => {
    let tracks;
    beforeAll(() => {
      tracks = [
        {
          trackId: 1,
          trackName: 'track1',
          artistName: 'artist1',
          trackPrice: 1.11,
          artworkUrl100: 'https://example.com/111',
        },
        {
          trackId: 2,
          trackName: 'track2',
          artistName: 'artist2',
          trackPrice: 2.22,
          artworkUrl100: 'https://example.com/222',
        },
      ];

      component = shallow(
        <TrackList
          tracks={tracks}
          loading={false}
          error={false}
        />,
      );
    });

    test('displays a h1 element containing `Rock Tracks`', () => {
      expect(component.find('h1').text()).toEqual('Rock Tracks');
    });

    test('a track entry is rendered for each item in the list', () => {
      expect(component.find(Track).length).toEqual(2);
    });

    test('correctly passes props to <Track />', () => {
      tracks.forEach((track, index) => {
        expect(component.find(Track).at(index).props().trackName).toEqual(track.trackName);
        expect(component.find(Track).at(index).props().artistName).toEqual(track.artistName);
        expect(component.find(Track).at(index).props().trackPrice).toEqual(track.trackPrice);
        expect(component.find(Track).at(index).props().artworkUrl100)
          .toEqual(track.artworkUrl100);
      });
    });
  });
});
