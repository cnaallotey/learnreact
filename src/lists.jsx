
import { useState, useEffect } from "react";


const lists = ({blogs , deleteBlog}) => {
    // const [blogs, setBlogs] = useState([
    //     { title: "Hello", artiste: "adele", album: "23", id: 1 },
    //     { title: "Shape of you", artiste: "Ed Sheeran", album: "Divide", id: 2 },
    //     { title: "Fountains", artiste: "Drake", album: "Lover Boy", id: 3 },
    //     { title: "Alright", artiste: "Kendrick Lamar", album: "Good Kid Mad City", id: 2 }
    const [blogLength , setblogLength] = useState(0)

    // ]);
    //const blogs = props.blogs
    useEffect(() => {




        const length = blogs.length
        setblogLength(length)
    })
    
    return (
        <div className="lists space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10  mt-10">
            {
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <p className="text-base font-medium text-gray-500 uppercase">{blog.name}</p>
                        <h2 className="mt-2 text-3xl font-semibold text-gray-900">{blog.username}</h2>
                        <div className="flex items-center mt-4"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-red-500 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
                        </svg><p className="text-base font-medium text-gray-500">{blog.address.city}</p>
                        </div><button onClick={() => {deleteBlog(blog.id)}} className="px-8 py-2 mt-2 text-base font-medium text-red-800 bg-red-200">Delete</button>
                        

                    </div>
                ))
            }  
<p>You have {blogLength} blogs</p>
        </div>
    )




}


export default lists
