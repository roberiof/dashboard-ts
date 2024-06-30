import React from 'react'
import { InputProps } from './types'
import './style.css'

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <p className="text-sm font-medium"> {label}</p>}
      <div className="h-fit w-full rounded-[20px] bg-gradient-to-r from-[#582CFF]/20 via-[#FFFFFF]/40 to-[#151515]/10 p-[1px]">
        <div className="bg-[#0F123B] rounded-[20px] ">
          <input
            {...rest}
            className="text-sm px-[20px] w-full h-[50px] rounded-[20px] bg-transparent outline-none shadow-lg  bg-[#0F123B]"
          />
        </div>
      </div>
    </div>
  )
}

export default Input
