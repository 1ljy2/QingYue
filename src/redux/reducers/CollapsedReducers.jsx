import { TOGGLE_COLLAPSE } from '../actionTypes'

const initialState = {
  isCollapsed: false,
}

export const CollapsedReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSE:
      return {
        ...state,
        isCollapsed: !state.isCollapsed,
      }
    default:
      return state
  }
}
