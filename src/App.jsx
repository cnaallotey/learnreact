import { useState } from 'react'
import Navbar from './navbar.jsx';
import Hero from './hero.jsx'
import Clicks from './clicks'
import Lists from './lists'
//import logo from './logo.svg'


function App() {
 // const [count, setCount] = useState(0)
  
  
  return (
    <div className="App max-w-screen-lg mx-auto">
      <Navbar />
      <Hero />
      <Clicks />
      <Lists/>

      
    </div>
  )
}

export default App
