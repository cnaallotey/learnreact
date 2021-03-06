import { useState , useEffect } from 'react'
import Navbar from './navbar.jsx';
import Hero from './hero.jsx'
import Clicks from './clicks'
import Lists from './lists'
import axios from 'axios';

//import logo from './logo.svg'


function App() {
 // const [count, setCount] = useState(0)
  const [blogs, setBlogs] = useState([]);
  
  const deleteBlog = (id) => {
    const newBlogs = blogs.filter(blog => blog.id != id)
    setBlogs(newBlogs)
  }
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setBlogs(res.data))



    console.log("useEffect run")
  }, [])
  
  
  return (
    <div className="App max-w-screen-lg mx-auto">
      <Navbar />
      <Hero />
      <Clicks />
     { blogs && <Lists blogs={blogs} deleteBlog = {deleteBlog} />}

      
    </div>
  )
}

export default App



//         { title: "Hello", artiste: "adele", album: "23", id: 1 },
//         { title: "Shape of you", artiste: "Ed Sheeran", album: "Divide", id: 2 },
//         { title: "Fountains", artiste: "Drake", album: "Lover Boy", id: 3 },
//         { title: "Alright", artiste: "Kendrick Lamar", album: "Good Kid Mad City", id: 4 }