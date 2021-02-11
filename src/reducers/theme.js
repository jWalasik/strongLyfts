import { LIGHT_MODE, DARK_MODE } from '../styles/base/themes'

export default (
  state = {
    isDarkMode: true,
    ...DARK_MODE
  },
  action
) => {
  switch (action.type) {
    case 'THEME_SWITCH':
      return { isDarkMode: !state.isDarkMode}
    default:
      return state
  }
}