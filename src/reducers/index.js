const INITIAL_STATE = {
  loading: true,
  contacts: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
      case "REQUEST_SHOPPINGLIST":
          return Object.assign({}, state, {
              loading: true
          });
      case "RECEIVE_SHOPPINGLIST":
          return Object.assign({}, state, {
              loading: false,
              shoppingList: action.items
          });
      default:
          return state;
  }
}