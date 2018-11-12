import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import TrackDetails from './TrackDetails';

describe('<TrackDetails />', () => {
  let component;
  describe('on loading', () => {
    beforeAll(() => {
      component = shallow(
        <TrackDetails
          loading
          error={false}
        />,
      );
    });

    test('a loading indicator is shown on the page', () => {
      expect(component.find('.loading').text()).toEqual('Loading...');
    });
  });

  describe('the track is unset and not loading', () => {
    beforeAll(() => {
      component = shallow(
        <TrackDetails
          loading={false}
          error
        />,
      );
    });

    test('an error indicator is shown on the page', () => {
      expect(component.find('.error').text()).toEqual('Sorry, an error has occurred. Try refreshing the page');
    });
  });

  describe('the track has been successfully retrieved', () => {
    const track = {
      trackId: 123,
      trackName: 'track1',
      artistName: 'artist1',
      trackPrice: 1.11,
      artworkUrl100: 'https://example.com/111',
      trackTimeMillis: 181000,
      releaseDate: '2008-06-23T07:00:00Z',
      trackViewUrl: 'https://example.com/222',
    };
    beforeAll(() => {
      component = shallow(
        <TrackDetails
          loading={false}
          error={false}
          track={track}
        />,
      );
    });

    test('displays an image of the track artwork', () => {
      expect(component.find('img').props().src).toEqual(track.artworkUrl100);
      expect(component.find('img').props().alt).toEqual(track.trackName);
    });

    test('displays the artist name', () => {
      expect(component.find('.trackdetails__track-info-artistname').text()).toEqual(`Artist: ${track.artistName}`);
    });

    test('displays the price in USD', () => {
      expect(component.find('.trackdetails__track-info-trackprice').text()).toEqual(`Price: $${track.trackPrice}`);
    });

    test('displays the duration in minutes and seconds', () => {
      expect(component.find('.trackdetails__track-info-duration').text()).toEqual('Duration: 3:01');
    });

    test('displays the release date in dd-MM-yyyy format', () => {
      expect(component.find('.trackdetails__track-info-releasedate').text()).toEqual('Released: 23-06-2008');
    });

    test('displays a `More details` link to the itunes track url', () => {
      expect(component.find('.trackdetails__track-links-viewitunes').props().href).toEqual(track.trackViewUrl);
      expect(component.find('.trackdetails__track-links-viewitunes').text()).toEqual('More details');
    });

    test('displays a `Go back` link to return to `/`', () => {
      expect(component.find(Link).props().to).toEqual('/');
      expect(component.find(Link).find('.trackdetails__track-links-goback').text()).toEqual('Go back');
    });
  });
});
