import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import bgLogin from './assets/bg_login.png'
import logoBhxh from './assets/logo_bhxh.png'

const root = createRoot(document.getElementById('root'))

const preloadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image()
    img.decoding = 'sync'
    img.onload = () => {
      if (typeof img.decode === 'function') {
        img.decode().then(resolve).catch(resolve)
      } else {
        resolve()
      }
    }
    img.onerror = resolve
    img.src = src
  })

const mountApp = () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

if (typeof window !== 'undefined' && window.innerWidth <= 1024) {
  const timeout = new Promise((resolve) => setTimeout(resolve, 180))
  Promise.race([
    Promise.all([preloadImage(bgLogin), preloadImage(logoBhxh)]),
    timeout,
  ]).finally(mountApp)
} else {
  mountApp()
}
