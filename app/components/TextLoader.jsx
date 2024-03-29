import React from 'react'

export const TextLoader = () => {
  return (
    <div class='animate-pulse flex space-x-4'>
      <div class='flex-1 space-y-4 py-1'>
        <div class='h-4 bg-gray-200 rounded w-3/4' />
        <div class='space-y-2'>
          <div class='h-4 bg-gray-200 rounded' />
          <div class='h-4 bg-gray-200 rounded w-5/6' />
          <div class='h-4 bg-gray-200 rounded w-5/6' />
        </div>
      </div>
    </div>
  )
}
