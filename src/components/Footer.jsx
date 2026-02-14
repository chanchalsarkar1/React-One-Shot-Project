import React from 'react'
import { Linkedin } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <div>
      <div className='bg-zinc-500 w-full h-[0.5px]'></div>
      <div className='flex flex-col justify-center items-center gap-6'>
        <h1>Learn Coding</h1>
        <div className='flex justify-center gap-4 my-4'>
          <a href=""><Linkedin/></a>
          <a href=""><Instagram/></a>
          <a href=""><Youtube/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer