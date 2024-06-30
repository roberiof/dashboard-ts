import React from 'react'
import Image from 'next/image'

interface ExternalLoginButtonProps {
  iconSrc: string
}

const ExternalLoginButton = ({ iconSrc }: ExternalLoginButtonProps) => {
  return (
    <button className="w-[75px] h-[75px] flex justify-center items-center rounded-[20px] border-2">
      <div className="h-fit w-full rounded-[20px] bg-gradient-to-r from-[#582CFF]/20 via-[#FFFFFF]/40 to-[#151515]/10 p-[2px]">
        <div className="bg-[#0F123B] rounded-[20px] ">
          <Image src={iconSrc} width={20} height={20} alt="Imagem de ícones" />
        </div>
      </div>
    </button>
  )
}

export default ExternalLoginButton
