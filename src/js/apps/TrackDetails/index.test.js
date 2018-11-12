import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MockRouter from 'react-mock-router';
import TrackDetailsContainer from '.';
import TrackDetails from './TrackDetails';

describe('<TrackDetails /> Container', () => {
  let component;
  const mockStore = configureMockStore();
  const track = {
    trackId: 123,
    trackName: 'track1',
    artistName: 'artist1',
    trackPrice: 1.11,
    artworkUrl100: 'https://example.com/111',
    trackTimeMillis: 1000,
    releaseDate: '2008-06-23T07:00:00Z',
    trackViewUrl: 'https://example.com/222',
  };

  beforeAll(() => {
    const store = mockStore({
      tracks: {
        loading: false,
        tracks: [track],
      },
    });

    component = mount(
      <MockRouter>
        <Provider store={store}>
          <TrackDetailsContainer
            match={{
              params: {
                trackId: '123',
              },
            }}
          />
        </Provider>
      </MockRouter>,
    );
  });

  test('renders a <TrackDetails />', () => {
    expect(component.find(TrackDetails).length).toEqual(1);
  });

  test('adds the track specified in the url to props', () => {
    expect(component.find(TrackDetails).props().track).toEqual(track);
  });
});
