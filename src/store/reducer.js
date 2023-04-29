const intialState = {
  fullscreen: false,
  collapse: false,
  hideSidebar: false,
  hideHeader: false,
};

export const layoutReducer = (state = intialState, action) => {
  if (action.type === "fullscreen") return { ...state, fullscreen: !state.fullscreen };
  if (action.type === "collapse_sidebar") return { ...state, collapse: !state.collapse };
  if (action.type === "hide_sidebar") return { ...state, hideSidebar: !state.hideSidebar };
  if (action.type === "hide_header") return { ...state, hideHeader: !state.hideHeader };

  return state;
};
