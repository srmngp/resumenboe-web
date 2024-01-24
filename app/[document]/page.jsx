'use client'

import React, { useEffect, useState } from 'react'
import { TextPage } from '../components/TextPage'

export default function Page ({ params }) {

  const [boe, setBoe] = useState(null)
  const [summary, setSummary] = useState()

  useEffect(() => {
    async function fetchBoe () {
      const response = await fetch('/api/boe/2021-03-01')
      const data = await response.json()
      console.log('data', data)
      setBoe(data)
    }

    async function fetchSummary () {
      const response = await fetch('/api/summary/2021-03-01')
      const data = await response.json()
      console.log('data', data)
      setSummary(data)
    }

    fetchBoe()
    fetchSummary()
  }, [])

  return (
    <div className='overflow-auto h-full w-full flex flex-col md:flex-row bg-[#F5F5F5]'>
      <div className='w-full md:w-1/2'>
        <TextPage text={boe} />
      </div>
      <div className='w-full md:w-1/2'>
        <TextPage text={summary} />
      </div>
    </div>
  )
}
