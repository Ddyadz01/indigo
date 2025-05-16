import { Route, Routes } from 'react-router-dom'
import { Home, LoginPage } from './pages/Index'

function App() {
  const auth = false
  return (
    <Routes>
      {auth ? (
        <>
          <Route path="/" element={<Home />} />
        </>
      ) : (
        <Route path="/" element={<LoginPage />} />
      )}
    </Routes>
  )
}

export default App
