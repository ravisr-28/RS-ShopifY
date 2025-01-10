import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

const CategoriesCard = ({image,types,button}) => {
  return (
    <div className='relative h-[300px] rounded-md'>
      <img src={image} alt="" className='size-full object-cover rounded-md hover:scale-105 duration-500' />
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h1 className='font-bold text-lg text-center'>{types}</h1>
        <h1 className='flex text-[14px] text-center'>{button}<IoArrowForward size={20} /></h1>
      </div>
    </div>
  )
}

export default CategoriesCard
