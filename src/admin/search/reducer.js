import {
  ADMIN_SEARCH_LOAD_DATA,
} from './constants';

const INITIAL_STATE = {
  admins: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADMIN_SEARCH_LOAD_DATA: {
      return { ...state, admins: payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
