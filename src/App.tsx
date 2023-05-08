import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import SearchDataPage from './components/SearchDataPage'
import HomePage from './components/HomePage'
import SingleCardPage from './components/SingleCardPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/recipes' element={<SearchDataPage />} />
          <Route path='/recipes/:id' element={<SingleCardPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
