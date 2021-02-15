import { LIGHT_MODE, DARK_MODE } from '../styles/base/themes'

export default (
  state = {
    isDarkMode: 'true' == localStorage.getItem('isDarkMode'),
    ...DARK_MODE
  },
  action
) => {
  switch (action.type) {
    case 'THEME_SWITCH':
      localStorage.setItem('isDarkMode', !state.isDarkMode)
      return { isDarkMode: !state.isDarkMode}
    default:
      return state
  }
}