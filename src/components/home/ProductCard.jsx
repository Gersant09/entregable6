import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
const handleClickAddProduct = (e)=>{
e.preventDefault()

}


  return (
    <Link to={`/products/${product.id}`} className='border-[1px] border-gray-400 rounded-md'>
      <div className='p-4 border-b-[1px] border-gray-400 h-[200px] overflow-hidden'>
        <img className='h-full w-full object-contain' src={product.images[0].url} alt="" />
      </div>
      <section className='p-4 relative'>
        <h4 className='text-gray-400 font-bold'>{product.brand}</h4>
        <h3 className='font-bold text-sm ml-2'>{product.title}</h3>
        <h4 className='text-gray-400 font-bold mt-4'>Price</h4>
        <span className='font-bold text-sm ml-2'>${product.price}</span>
        <button onClick={handleClickAddProduct} className='absolute right-4 bottom-4 bg-red-500 p-2 text-white text-xl rounded-full w-[45px] aspect-square hover:bg-red-600 transition-colors'><i className='bx bx-cart-alt' ></i></button>
      </section>
    </Link>
  )
}

export default ProductCard
