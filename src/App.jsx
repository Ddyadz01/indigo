import { Route, Routes } from 'react-router-dom'
import { Home, LoginPage } from './pages/Index'
import { Header } from './components/Index'

function App() {
  const auth = true
  return (
    <>
      {auth ? <Header /> : ''}
      <Routes>
        {auth ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <Route path="/" element={<LoginPage />} />
        )}
      </Routes>
    </>
  )
}

export default App
