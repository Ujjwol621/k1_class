import { NavLink, Route, Routes } from 'react-router-dom'
import Products from './products'

function App() {
  return (
    <>
      <header className="h-20 bg-black text-white flex items-center justify-around">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<h1 className="text-2xl font-semibold">Home Page</h1>} />
          <Route path="/about" element={<h1 className="text-2xl font-semibold">About Us Page</h1>} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<h1 className="text-2xl font-semibold">Contact Page</h1>} />
        </Routes>
      </main>
    </>
  )
}

export default App