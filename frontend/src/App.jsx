import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'





function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        alert(`Hello ${result.hello}!`)
      })
  }, [])


  return (
    <>

    </>
  )
}

export default App
