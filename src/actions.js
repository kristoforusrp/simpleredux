import { TOGGLE_TEXT_COLOR } from './constants.js'
/**
 * Actions creator that will be send it payload to the reducer
 */
export function toggleTextColor(status) {
  return {
    type: TOGGLE_TEXT_COLOR,
    status
  }
}