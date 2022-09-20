const defaultState = {
  allData: [],
  allCategories: [],
  favs: [],
  audio: "",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ALL_DATA":
      return { ...state, allData: action.payload };

    case "ALL_CATEGORIES":
      return { ...state, allCategories: action.payload };
    case "FAVS":
      const arr = [...state.favs, action.payload];
      return { ...state, favs: arr };
    case "AUDIO":
      return { ...state, audio: action.payload };

    default:
      return state;
  }
};
export default reducer;
