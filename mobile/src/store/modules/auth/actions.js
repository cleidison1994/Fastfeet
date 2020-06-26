export function SignInFaiulure() {
  return {
    type: '@auth/DELIVERYMAN_SIGNIN_FAILURE',
  };
}
export function SignInRequest(deliveryman_id) {
  return {
    type: '@auth/DELIVERYMAN_SIGNIN_REQUEST',
    payload: {deliveryman_id},
  };
}
export function SignInSuccess(data) {
  return {
    type: '@auth/DELIVERYMAN_SIGNIN_SUCCESS',
    payload: {data},
  };
}
export function LogoutRequest() {
  return {
    type: '@auth/DELIVERYMAN_LOGOUT_REQUEST',
  };
}
export function LogoutSuccess() {
  return {
    type: '@auth/DELIVERYMAN_LOGOUT_SUCCESS',
  };
}
