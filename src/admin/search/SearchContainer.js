import { connect } from 'react-redux';
import Search from './Search';
import { requestSearchData } from './actions';

const mapDispatch = {
  requestSearchData,
};

const mapState = ({ adminSearch }) => ({
  admins: adminSearch.admins,
});

export default connect(mapState, mapDispatch)(Search);
