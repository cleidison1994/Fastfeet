export function startDeliveryRequest(delivery_id) {
  return {
    type: '@deliveryman/START_DELIVERY_REQUEST',
    payload: {delivery_id},
  };
}
export function startDeliverySuccess() {
  return {
    type: '@deliveryman/START_DELIVERY_SUCCESS',
  };
}
export function deliveryFailure() {
  return {
    type: '@deliveryman/DELIVERY_FAILURE',
  };
}

export function deliveryAddProblemRequest(delivery) {
  return {
    type: '@deliveryman/ADD_DELIVERY_PROBLEM_REQUEST',
    payload: {delivery},
  };
}
export function deliveryAddProblemSuccess() {
  return {
    type: '@deliveryman/ADD_DELIVERY_PROBLEM_SUCCESS',
  };
}
