import React from 'react'
import { useEffect } from 'react'
export default function Contact() {
  useEffect(()=>{
    console.log('Contact is created');

    return()=>{
      console.log('Contact is destroyed');
    }
  })

  return (

    
    <div>
      Contatct us 
    </div>
  )
}
