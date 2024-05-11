import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Loader from './Loader/Loader';
import Card from './Card';


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

    useEffect(()=>{
      getData();
    },[])
   
 return (

  <div >

    {  
      product.length===0
      ? 
      <Loader/>
      : 

      <div className='w-[95%] py-8 px-4 mx-auto  flex flex-wrap gap-12 justify-center'>
        {product.map((item,index)=> <Card item={item}  key={index}/> )}
       
      </div>
    }
    
    </div>

  )

 }
export default Home
