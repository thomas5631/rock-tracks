import React from 'react';
import PropTypes from 'prop-types';
import Track from './Track';

import './scss/TrackList.scss';

const TrackList = ({ loading, error, tracks }) => (
  <div className="tracklist">
    <h1>Rock Tracks</h1>
    {
      loading && (
        <div className="loading">Loading...</div>
      )
    }
    {
      error && (
        <div className="error">Sorry, an error has occurred. Try refreshing the page</div>
      )
    }
    {
      !loading && !error && tracks.map(track => (
        <Track
          key={track.trackId}
          trackId={track.trackId}
          trackName={track.trackName}
          artistName={track.artistName}
          trackPrice={track.trackPrice}
          artworkUrl100={track.artworkUrl100}
        />
      ))
    }
  </div>
);

TrackList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    trackPrice: PropTypes.number.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
  })).isRequired,
};

export default TrackList;
