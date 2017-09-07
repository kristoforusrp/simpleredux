import { TOGGLE_TEXT_COLOR } from './constants.js'

/**
 * Reducer, it will hold our initial state and change the state of our component
 */
const initialState = {
  isToggleTextColor: false
}

function toggleTextReducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_TEXT_COLOR:
      return { ...state, isToggleTextColor: action.status }
    default: 
      return state
  }
}

export default toggleTextReducer