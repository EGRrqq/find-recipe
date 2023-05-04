import { 
  Box,
  Stack
} from '@chakra-ui/react'
import CardList from './components/SearchDataPage'
import Header from './components/Header'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <Box>
      <Stack spacing={8} minHeight={'100vh'} >
        <Header />
        <SearchForm queryParam='recipe' />
        <CardList />
      </Stack>
    </Box>
  )
}

export default App
