import React from 'react'
import Button from './button'
import Image from 'next/image'

const RequestModal: React.FC<RequestModalProps> = ({ open, onClose }) => {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 h-screen z-10 flex-center transition-colors
        ${open ? 'visible bg-black/50' : 'invisible'}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-[#1b1b1b] rounded-xl rounded-tr-none shadow transition-all mx-2 w-full max-w-xl
          ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
        `}
      >
        <button onClick={onClose} className="absolute sm:-top-10 right-0 rounded-t-lg p-1 flex-center size-10 bg-[#1b1b1b]">
          <Image src="./images/icons/close.svg" alt="menu" className=" object-contain" width={19} height={19} />
        </button>
        <h2 className="pt-5 border-b border-white/20 text-left pb-3 px-5 text-white font-urbanist text-xl font-semibold">
          Request For Demo
        </h2>
        <form className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="text" className="form-label">
                Name
              </label>
              <input type="text" id="text" className="form-control" placeholder="enter your name" />
            </div>
            <div>
              <label htmlFor="text" className="form-label">
                Company
              </label>
              <input type="text" id="text" className="form-control" placeholder="enter your company" />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" id="email" className="form-control" placeholder="enter your email" />
            </div>
            <div>
              <label htmlFor="text" className="form-label">
                Phone
              </label>
              <input type="text" id="text" className="form-control" placeholder="enter your phone number" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea id="message" rows={5} className="form-control resize-none" placeholder="enter your new message" />
            </div>
          </div>
          <div className="mt-5">
            <Button type="submit" className="rounded-lg px-6 py-2" variant="primary">
              save
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestModal
