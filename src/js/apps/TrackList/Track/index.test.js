import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { constructTrackDetailsUrl } from '../../TrackDetails/routes';
import Track from '.';

describe('<Track />', () => {
  let track;
  let component;
  beforeAll(() => {
    track = {
      trackId: 1,
      trackName: 'track1',
      artistName: 'artist1',
      trackPrice: 1.11,
      artworkUrl100: 'https://example.com/111',
    };

    component = shallow(
      <Track
        trackId={track.trackId}
        trackName={track.trackName}
        artistName={track.artistName}
        trackPrice={track.trackPrice}
        artworkUrl100={track.artworkUrl100}
      />,
    );
  });

  test('has an image of the track artwork', () => {
    expect(component.find('img').props().src).toEqual(track.artworkUrl100);
    expect(component.find('img').props().alt).toEqual(track.trackName);
  });

  test('has basic track info', () => {
    expect(component.find('.tracklist__track-trackname').text())
      .toEqual(track.trackName);
    expect(component.find('.tracklist__track-artistname').text())
      .toEqual(track.artistName);
    expect(component.find('.tracklist__track-trackprice').text())
      .toEqual(`$${track.trackPrice}`);
  });

  test('has a link to more details about the track', () => {
    expect(component.find(Link).props().to).toEqual(constructTrackDetailsUrl(track.trackId));
    expect(component.find(Link).find('.tracklist__track-details').text()).toEqual('More details');
  });
});
