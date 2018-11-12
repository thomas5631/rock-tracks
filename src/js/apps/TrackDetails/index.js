import { connect } from 'react-redux';
import TrackDetails from './TrackDetails';

const mapStateToProps = (state, ownProps) => ({
  loading: state.tracks.loading,
  error: state.tracks.error,
  track: state.tracks.tracks.find(
    track => track.trackId === parseInt(ownProps.match.params.trackId, 10),
  ),
});

export default connect(mapStateToProps, {})(TrackDetails);
