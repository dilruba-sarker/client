import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import useAuth from '../../hooks/useAuth'
import { useState } from 'react'

const PurchaseModal = ({ closeModal, isOpen, plant }) => {
  // Total Price Calculation
 const { name, description, category, quantity, price, _id, seller, image } =
    plant || {}
      const {user}=useAuth()
const [selectedQuantity,setSelectedQuantity]= useState(1)
const [totalPrice,setTotalPrice]=useState(price)

const handleQuantity=value=>{
console.log(value)
 const quantityNumber = parseInt(value)
  setSelectedQuantity(quantityNumber)
  setTotalPrice(quantityNumber * price)
}
  return (
    <Dialog
      open={isOpen}
      as='div'
      className='relative z-10 focus:outline-none '
      onClose={closeModal}
    >
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel
            transition
            className='w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl'
          >
            <DialogTitle
              as='h3'
              className='text-lg font-medium text-center leading-6 text-gray-900'
            >
              Review Info Before Purchase
            </DialogTitle>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>Plant: {name}</p>
            </div>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>Category: {category}</p>
            </div>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>Customer: {user?.
displayName
}</p>
            </div>

            <div className='mt-2'>
              <p className='text-sm text-gray-500'>Price Per Unit: $ {price}</p>
            </div>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>Available Quantity: {quantity}</p>
            </div>
            <hr className='mt-2' />

            <div className='mt-2'>
              <p>Order info</p>
              <input className='border px-3' value={selectedQuantity} onChange={e=>handleQuantity(e.target.value)} type="number" min={1} max={quantity} />
            </div>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>Selected Quantity: {quantity}</p>
            </div>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>Total Price : $ {price}</p>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default PurchaseModal
