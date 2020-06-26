import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliveryman/START_DELIVERY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/START_DELIVERY_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@deliveryman/DELIVERY_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@deliveryman/ADD_DELIVERY_PROBLEM_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/ADD_DELIVERY_PROBLEM_SUCCESS': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
