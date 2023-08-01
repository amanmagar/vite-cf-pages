import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cfLogo from '/cfpages.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://developers.cloudflare.com/pages/" target="_blank">
          <img src={cfLogo} className="logo cf-pages" alt="Cloudflare Pages logo" />
        </a>
      </div>
      <h1>Vite + React + Cloudflare Pages </h1>
      <p className="read-the-docs">
        Aman Samal Magar, DevSecOps Engineer
      </p>
    </>
  )
}

export default App
