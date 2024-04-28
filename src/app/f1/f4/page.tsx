import Link from 'next/link'
import React from 'react'

export default function F4() {
  return (
    <div>
      <h1 className="text-5xl">F4 page</h1>
      <Link href={'/f1/f3'} className='text-[blue]'>F3</Link>
      <Link href={'/about'} className='text-[blue]'>About</Link>
    </div>
  )
}
