import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ValueProvider } from './context/ValueProvider.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <ValueProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ValueProvider>,
)
    