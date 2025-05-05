import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex flex-col items-center ">
    <div className='w-[100%] max-w-[1440px]'>
    <App />
    </div>
    </div>
  </StrictMode>,
)
