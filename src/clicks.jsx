import { useState } from "react"



const click = () => {
    const [names, setNames] = useState("Mario")
  const [age , setAge] = useState(15)
  


  const lion = () => {
    setNames("Lion")
    setAge(46)
  }

   const charles = () => {
    setNames("Charles")
    setAge(25)
   }
    const ama = () => {
        setNames("Ama")
        setAge(36)
    }
       
    return (
        <div>
            <p>{names} is {age} years old. </p>
      <button onClick={() => lion()} className="px-8 py-3 text-base font-medium bg-gray-900 text-white">Lion</button>
      <button onClick={() => charles()} className="px-8 py-3 text-base font-medium bg-gray-900 text-white">Charles</button>
      <button onClick={()=>ama()} className="px-8 py-3 text-base font-medium bg-gray-900 text-white">Ama</button>
        </div>
    )
}

export default click