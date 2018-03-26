export default (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN_MODAL':
      return {
        ...state,
        showLoginModal: action.showLoginModal
      }
    default:
      return state
  }
};