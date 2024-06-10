import React, { useEffect, lazy, Suspense } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Loader from './Loader/Loader';
import Filter from './Filter';
const Card=lazy(()=> import('./Card'))

function Home({darkMode}) {

    const [product, setProduct]=useState([])
    const [copyProduct,setCopyProduct]= useState([])
    const [loading,setLoading]= useState(true)

    let url ='https://fakestoreapi.com/products';
  
    useEffect(()=>{
      getData();
    },[])

    let getData=()=>{
      setLoading(true)
      axios.get(url)
      .then((products)=>{
        console.log(products);
        setProduct(products.data);
        setCopyProduct(products.data);
        setLoading(false)
      })
      .catch(err=>{console.log('Error occured: '+err)
          setLoading(false)}
          
    )
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
        setLoading(true)
        axios.get(url)
        .then((products)=>{
          console.log(products);
          setProduct(products.data);
          setCopyProduct(products.data);
          setLoading(false);
        })
        .catch(err=>{console.log('Error occured: '+err)
            setLoading(false) 
          })
        
        
    }

    
    
 return (

  <div className= {`pt-10 min-h-screen ${darkMode? 'bg-gray-800': 'bg-slate-50' } `}>
    
    <Filter handleJewel={handleJewel} handleMen={handleMen} handleWomen={handleWomen} handleElectric={handleElectric} handleAll={handleAll} />

    {  loading? <Loader/>
        
        :
     
      <Suspense fallback={ <Loader/> } >
          <div className='w-[95%] py-8 px-4 mx-auto  flex flex-wrap gap-12 justify-center'>
            {product.map((item,index)=> <Card darkMode={darkMode} item={item}  key={index}/> )}
          </div>
      </Suspense>
    }
    
    </div>

  )

 }
export default Home
