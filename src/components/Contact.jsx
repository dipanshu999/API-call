import React, { useState } from 'react'
import { useEffect } from 'react'


export default function Contact() {

  const[first,setFirst]= useState('First data')
  const[second,setSecond]= useState('Second data')

  useEffect(()=>{
    console.log('Contact is created');

    return()=>{
      console.log('Contact is destroyed');
    }
  },[])

  return (
    
    <div>
      <h1>Contact us </h1>

      <h1 className='mt-4'>{first}</h1>
      <button onClick={()=>setFirst('First data has been changed')} className='bg-red-300 p-2' >Change first</button>

      <h1 className='mt-4'>{second}</h1>
      <button onClick={()=>setSecond('Second data has been changed')} className='bg-green-300 p-2' >Change second</button>

    </div>

  )
}
