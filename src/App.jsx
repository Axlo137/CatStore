import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-shell">
          <Navbar />
          <main className="page-wrapper">
            <AppRoutes />
          </main>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
