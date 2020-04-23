export function findRequest(id) {
  return {
    type: '@order/FIND_REQUEST',
    payload: { id },
  };
}

export function findSuccess(order) {
  return {
    type: '@order/FIND_SUCCESS',
    payload: { order },
  };
}

export function findFailure() {
  return {
    type: '@order/FIND_FAILURE',
  };
}

// export function signOut() {
//   return {
//     type: '@auth/SIGN_OUT',
//   };
// }
