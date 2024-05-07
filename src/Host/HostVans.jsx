import { useEffect, useState} from "react"
import { Link } from "react-router-dom"

function HostVans() {
  const[hostVans,setHostVans]=useState([])

  useEffect(()=>{
   const getVans = async () => {  
     const req= await fetch('/api/host/vans')
  
        const response = await  req.json();
        console.log(response)
       setHostVans(response.vans)
    
   }
   getVans()
  },[])

   const hostElements=hostVans.map(vans => (
    <Link to={`/host/vans/${vans.id}`} key={vans.id}>
   <div  className="flex my-4 shadow-md rounded-lg bg-white p-6  w-auto h-42">
   <div >
    <img src={vans.imageUrl} className="h-32 rounded-md" alt="wer" />
    </div>
    <div className="flex  justify-center flex-col">
        <h1 className="text-2xl px-6">{vans.name}</h1>
        <p  className="text-xl px-6">${vans.price} <span className="text-gray-500">/day</span> </p>
    </div>
   </div>
   </Link>
    ))


    return (
    <>

{hostVans.length > 0 ?
   <div className="p-10">
    {hostElements}
   </div>: <h1 className="text-4xl text-center">Loading....</h1>
}
    </>
  )
}

export default HostVans
