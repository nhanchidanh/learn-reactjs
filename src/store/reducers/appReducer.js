import actionTypes from "../actions/actionTypes";

const initState = {
  banner: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      // console.log(action.homeData);
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionType === "banner")
            ?.items || null,
      };
    // console.log(banner);
    default:
      return state;
  }
};

export default appReducer;
