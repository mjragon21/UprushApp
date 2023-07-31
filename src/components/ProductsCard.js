import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ProductsCard = ({ product }) => {
  const handleDetails =()=>{
    console.log("details");
  }


  return (
    <div className='group relative'>
      <div onClick={ handleDetails }className='w-full h-96 cursor-pointer overflow-hidden'>
        <img 
        className ="w-full object-cover group-hover:scale-110 duration-150"
        src={product.image} alt="productImg"/>
      </div>
      <div className='w-full border-[2px] px-2 py-4'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-titleFont text-base'>
              {product.title.substring(0, 15)}
            </h2>   
          </div>
          <div className='flex justify-end gap-2 relative overflow-hidden w-28 text-sm'>
            <div className='flex gap-2 transform group-hover:translate-x-24 
            transition-transform duration-500'>
              <p className="font-semibold">Php{product.price}</p>
            </div>
            <p className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-500
            flex items-center gap-1 top-0 transform -translate-x-32
            group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>
              add to cart{""}<span><BsArrowRight/></span></p>
          </div>
        </div>
        <div>
          <p>{product.catergory}</p>
          
        </div>
        <div className='absolute top-4 right-0'>
          {product.isNew && <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'
          >Discounted</p>}
        </div>
      </div>
    </div>
  )
}

export default ProductsCard
