import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import TrackListContainer from '.';
import TrackList from './TrackList';

describe('<TrackList /> Container', () => {
  let component;
  const mockStore = configureMockStore();

  beforeAll(() => {
    const store = mockStore({
      tracks: {
        loading: false,
        error: false,
        tracks: [],
      },
    });

    component = mount(
      <Provider store={store}>
        <TrackListContainer />
      </Provider>,
    );
  });

  test('renders a <TrackList />', () => {
    expect(component.find(TrackList).length).toEqual(1);
  });

  test('adds the tracks redux state to props', () => {
    expect(component.find(TrackList).props().loading).toEqual(false);
    expect(component.find(TrackList).props().error).toEqual(false);
    expect(component.find(TrackList).props().tracks).toEqual([]);
  });
});
