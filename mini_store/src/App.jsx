import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './ProductList/ProductList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductList/>
    </>
  )
}

export default App
