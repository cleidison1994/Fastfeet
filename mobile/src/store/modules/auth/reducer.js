import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  deliveries: [],
  signed: false,
  loading: false,
};
export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/DELIVERYMAN_SIGNIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/DELIVERYMAN_SIGNIN_SUCCESS': {
        draft.profile = action.payload.data;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/DELIVERYMAN_SIGNIN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/DELIVERYMAN_LOGOUT_REQUEST': {
        draft.profile = null;
        break;
      }
      case '@auth/DELIVERYMAN_LOGOUT_SUCCESS': {
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
