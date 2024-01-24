import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TextLoader } from './TextLoader'

const textParagraph = (text) => {
  return (
    <p className='mt-4 leading-7 text-gray-600'>
      {text.msg}
    </p>
  )
}

export const TextPage = ({ text }) => {
  return (
    <ScrollArea className='w-full p-4'>
      <div className='text-sm bg-white shadow-lg rounded-lg p-8 h-[85vh] overflow-auto'>
        <h4 className='mb-4 text-lg font-medium leading-none text-gray-700'>Text Area 1</h4>
        {text == null ? <TextLoader /> : textParagraph(text)}
      </div>
    </ScrollArea>
  )
}
