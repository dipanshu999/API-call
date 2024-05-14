import React from 'react'

export default function Filter({handleJewel, handleMen,handleElectric, handleAll, handleWomen}) {
  return (
    <div>
      
    <div className="btn flex gap-4 justify-center ">
       <button className='bg-black p-2 rounded-md text-white' onClick={handleAll} >All items</button>
       <button className='bg-blue-300 p-2 rounded-md ' onClick={handleMen} >   Men's</button>
       <button className='bg-red-300 p-2 rounded-md ' onClick={handleWomen} > Women's</button>
       <button className='bg-green-300 p-2 rounded-md'onClick={handleJewel} > Jewellery</button>
       <button className='bg-yellow-300 p-2 rounded-md'onClick={handleElectric} >Electronics</button>
    </div>

    </div>
  )
}
