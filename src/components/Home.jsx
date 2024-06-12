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
    const [error,setError]= useState(false)


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
          setLoading(false);
          setError(true);
        }
          
    )
    } 

    const filterProducts=(category)=>{
      category
        ?
        setProduct(copyProduct.filter(item=>item.category===category))
        :
        setProduct(copyProduct)      
    }

    const handleJewel = () => filterProducts("jewelery");
    const handleMen = () => filterProducts("men's clothing");
    const handleElectric = () => filterProducts("electronics");
    const handleWomen = () => filterProducts("women's clothing");
    const handleAll = () => filterProducts(null);

    
    
 return (

  <div className= {`pt-10 min-h-screen ${darkMode? 'bg-gray-800': 'bg-slate-50' } `}>
    
    <Filter handleJewel={handleJewel} handleMen={handleMen} handleWomen={handleWomen} handleElectric={handleElectric} handleAll={handleAll} />

    {  loading? <Loader/>
        
        :
     error
        ?
     <div className='text-5xl text-center mt-40 text-red-600' >!! Something went wrong</div>
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
