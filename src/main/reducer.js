import { combineReducers } from 'redux';
import { reducer as adminSearchReducer } from 'admin/search';

const root = combineReducers({
  adminSearch: adminSearchReducer,
});

export default root;
