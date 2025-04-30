import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Team from './pages/team'
import Appointments from './pages/Appointments'
import Login from './pages/Login'

function Layout({ children }) {
  const location = useLocation()
  const hideHeaderFooter = location.pathname === '/login' // puedes añadir más rutas si quieres

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/appointments' element={<Appointments/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
