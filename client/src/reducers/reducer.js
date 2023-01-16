const initialState = {
  menuToggle: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'MENUTOGGLE':
      return { ...state, menuToggle: !state.menuToggle };
    default:
      return state;
  }
}

export default Reducer;
