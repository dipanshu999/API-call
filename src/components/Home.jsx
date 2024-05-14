import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Loader from './Loader/Loader';
import Card from './Card';
import Filter from './Filter';


function Home() {

    const [product, setProduct]=useState([])
    const [copyProduct,setCopyProduct]= useState([])

    let url ='https://fakestoreapi.com/products';
  
        
    useEffect(()=>{
      getData();
    },[])

    let getData=()=>{
  
      axios.get(url)
      .then((products)=>{
        console.log(products);
        setProduct(products.data);
        setCopyProduct(products.data);
      })
      .catch(err=>console.log('Error occured: '+err))
    } 


    function handleJewel(){
      setProduct( copyProduct.filter(item=> item.category === "jewelery"));
    }
    function handleMen(){
      setProduct(  copyProduct.filter(item=> item.category === "men's clothing"));
    }
    function handleElectric(){
      setProduct(  copyProduct.filter(item=> item.category === "electronics"));
    }
    function handleWomen(){
      setProduct(  copyProduct.filter(item=> item.category === "women's clothing"));
    }
    

    function handleAll(){
        axios.get(url)
        .then((products)=>{
          console.log(products);
          setProduct(products.data);
          setCopyProduct(products.data);
        })
        .catch(err=>console.log('Error occured: '+err))
    }

   
 return (

  <div className='mt-10'>

    <Filter handleJewel={handleJewel} handleMen={handleMen} handleWomen={handleWomen} handleElectric={handleElectric} handleAll={handleAll} />

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
