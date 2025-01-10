import React from 'react'
const InformationCard = ({icons,title,paragraph}) => {
  return (
    <div className='bg-neutral-700 flex flex-col items-center justify-center p-6 rounded-lg shadow-xl hover:scale-105 duration-500'>
      <h4 className='text-red-700'>{icons}</h4>
      <h1 className='font-bold text-gray-200 mt-4'>{title}</h1>
      <p className='text-center text-gray-200 text-[14px] mt-2'>{paragraph}.</p>
    </div>
  )
}

export default InformationCard
