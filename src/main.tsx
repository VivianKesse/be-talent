import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Employees from './pages/employees/Employees'
import "./global.module.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Employees />
  </StrictMode>,
)
