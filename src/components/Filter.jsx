import React from 'react'

export default function Filter({handleJewel, handleMen,handleElectric, handleAll, handleWomen}) {
  return (
    <div>
      
    <div className="btn flex gap-4 justify-center ">
       <button className='border-white border-2 bg-black p-2 rounded-md text-white' onClick={handleAll} >All items</button>
       <button className='border-white border-2 bg-blue-300 p-2 rounded-md ' onClick={handleMen} >   Men's</button>
       <button className='border-white border-2 bg-red-300 p-2 rounded-md ' onClick={handleWomen} > Women's</button>
       <button className='border-white border-2 bg-green-300 p-2 rounded-md'onClick={handleJewel} > Jewellery</button>
       <button className='border-white border-2 bg-yellow-300 p-2 rounded-md'onClick={handleElectric} >Electronics</button>
    </div>

    </div>
  )
}
