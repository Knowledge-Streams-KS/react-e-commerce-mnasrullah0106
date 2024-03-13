import { useState } from 'react'
import ProductList from './components/ProductCard';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>Hello E-Commerce</h1> */}
     <ProductList />
    </>
  )
}

export default App;
