import produce from 'immer';

const INITIAL_STATE = {
  order: {},
  loading: false,
};

export default function order(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@order/FIND_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@order/FIND_SUCCESS': {
        draft.order = action.payload.order;
        draft.loading = false;
        break;
      }
      case '@order/FIND_FAILURE': {
        draft.loading = false;
        break;
      }
      // case '@auth/SIGN_OUT': {
      //   draft.token = null;
      //   draft.signed = false;
      //   break;
      // }
      default:
    }
  });
}
