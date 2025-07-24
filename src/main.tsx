import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import LandingPage from './pages/landing_page'

// todo: validate to lock routes

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
