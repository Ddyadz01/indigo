import { Route, Routes } from 'react-router-dom'
import { Events, Home, LoginPage } from './pages/Index'
import { CenterContent, Header, Sidebar } from './components/Index'

function App() {
  const auth = true
  return (
    <>
      {auth && <Header />}
      <CenterContent>
        {auth ? (
          <div className="main">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Events />} />
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        )}
      </CenterContent>
    </>
  )
}

export default App
