export default (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        showModal: action.showModal
      }
    default:
      return state
  }
};