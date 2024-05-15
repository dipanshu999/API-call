import React from 'react'

export default function Card({item, darkMode}) {

const {title, image, price}=item;
  return (
    <div className={`w-[15%] h-[17rem] border-${darkMode?'white':'black'} border rounded-xl overflow-hidden`} style={{boxShadow:"5px 0px 12px white"}}>
      
      <div className="pic bg-white h-[45%]  ">
        <img src={image} alt="" className='h-[100%] mx-auto'  />
      </div>

      <div className="foot mt-2 h-[55%] flex flex-col gap-3 pl-2 bg-[#ffdf75] ">
        <p className='font-semibold text-3xl' >${price}</p>
        <p className='opacity-80'>{title}</p>
      </div>
    </div>
  )
}
