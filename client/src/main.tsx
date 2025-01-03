import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PublicRoutes } from './Routes/PublicRoutes.tsx'
import './Styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PublicRoutes />
  </StrictMode>
)
