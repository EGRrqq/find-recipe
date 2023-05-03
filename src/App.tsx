import { 
  Box,
  Container, 
  Stack
} from '@chakra-ui/react'
import Data from './components/Data'
import Header from './components/Header'

function App() {

  return (
    <Box>
      <Header />

      <Stack spacing={8} bg={'yellow.50'} minHeight={'100vh'} >
        <Data />
      </Stack>
    </Box>
  )
}

export default App
