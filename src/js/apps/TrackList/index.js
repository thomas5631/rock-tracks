import { connect } from 'react-redux';
import TrackList from './TrackList';

const mapStateToProps = state => ({
  loading: state.tracks.loading,
  error: state.tracks.error,
  tracks: state.tracks.tracks,
});

export default connect(mapStateToProps, {})(TrackList);
