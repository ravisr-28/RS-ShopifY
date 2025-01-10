import React from 'react'

const Modal = ({isModalOpen,setIsModalOpen,changeaddress}) => {
    if(!isModalOpen) return null;
  return (
    <div className='fixed inset-0 bg-neutral-900 bg-opacity-80 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
         <button className='absolute top-4 right-4 text-gray-200 text-3xl' onClick={()=>setIsModalOpen(false)}>&times;</button>
         <div>{changeaddress}</div>
      </div>
    </div>
  )
}

export default Modal
