import React from 'react'
import { useState } from 'react'
import axios from 'axios'


function Home() {

    const [product, setProduct]=useState([])

    let url ='https://fakestoreapi.com/products';
  
    let getData=()=>{
  
      axios.get(url)
      .then((products)=>{
        console.log(products);
        setProduct(products.data);
      })
      .catch(err=>console.log('Error occured: '+err))
    }
   
 return (

  <div className='pl-20'>
    Hii there 

    <br />
    <br />

    <div className="btn">
      <button className='bg-red-300 py-2 px-5 rounded-md' onClick={getData}>Get data</button>
    </div>

    <div>
    {  
        product.length===0
            ? 
        <h1>Loading ....</h1>
            :
        product.map((item,index)=><li key={index} className='mt-6' ><h1 className='bg-green-300 p-2 inline'>{item.title}</h1></li>)
    }
    </div>


    </div>

  )

 }
export default Home
