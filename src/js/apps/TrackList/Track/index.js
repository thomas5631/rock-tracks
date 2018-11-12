import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { constructTrackDetailsUrl } from '../../TrackDetails/routes';

const Track = ({
  trackId,
  trackName,
  artistName,
  trackPrice,
  artworkUrl100,
}) => (
  <div className="tracklist__track">
    <div className="tracklist__track-artwork">
      <img
        src={artworkUrl100}
        alt={trackName}
      />
    </div>
    <div className="tracklist__track-trackname">{trackName}</div>
    <div className="tracklist__track-artistname">{artistName}</div>
    <div className="tracklist__track-trackprice">
      $
      {trackPrice}
    </div>

    <Link to={constructTrackDetailsUrl(trackId)}>
      <div className="tracklist__track-details">
        More details
      </div>
    </Link>
  </div>
);

Track.propTypes = {
  trackId: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  trackPrice: PropTypes.number.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
};

export default Track;
