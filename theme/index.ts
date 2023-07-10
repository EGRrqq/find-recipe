import { extendTheme } from '@chakra-ui/react'

// Global style overrides
// import styles from './styles'

// Foundational style overrides
import { shadows } from './foundations'

// Component style overrides
import { buttonTheme, inputTheme } from './components'

const overrides = {
  shadows,
  // Other foundational style overrides go here
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    // Other components go here
  },
}

const theme = extendTheme(overrides)

// console.log(theme)

export default theme