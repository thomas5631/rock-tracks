import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './scss/TrackDetails.scss';

const TrackDetails = ({ track, loading }) => {
  const convertDate = (tzformat) => {
    const dateObject = new Date(tzformat);
    const date = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    return `${date < 10 ? '0' : ''}${date}-${month < 10 ? '0' : ''}${month}-${year}`;
  };

  const convertTime = (milliseconds) => {
    const totalSeconds = milliseconds / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = (totalSeconds % 60).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (loading) {
    return (
      <div className="loading">Loading...</div>
    );
  } if (track) {
    return (
      <div className="trackdetails">
        <h1 className="trackdetails__trackname">{track.trackName}</h1>
        <div className="trackdetails__track">
          <div className="trackdetails__track-artwork">
            <img
              src={track.artworkUrl100}
              alt={track.trackName}
            />
          </div>
          <div className="trackdetails__track-info">
            <div className="trackdetails__track-info-artistname">
              Artist:
              {' '}
              {track.artistName}
            </div>
            <div className="trackdetails__track-info-trackprice">
              Price: $
              {track.trackPrice}
            </div>
            <div className="trackdetails__track-info-duration">
              Duration:
              {' '}
              {convertTime(track.trackTimeMillis)}
            </div>
            <div className="trackdetails__track-info-releasedate">
              Released:
              {' '}
              {convertDate(track.releaseDate)}
            </div>
          </div>
          <div className="trackdetails__track-links">
            <a className="trackdetails__track-links-viewitunes" href={track.trackViewUrl}>More details</a>
            <Link to="/">
              <div className="trackdetails__track-links-goback">
                Go back
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="error">Sorry, an error has occurred. Try refreshing the page</div>
  );
};

TrackDetails.defaultProps = {
  track: null,
};

TrackDetails.propTypes = {
  track: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    trackPrice: PropTypes.number.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    trackTimeMillis: PropTypes.number.isRequired,
    releaseDate: PropTypes.string.isRequired,
    trackViewUrl: PropTypes.string.isRequired,
  }),
  loading: PropTypes.bool.isRequired,
};

export default TrackDetails;
