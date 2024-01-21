import React from 'react'

export default function Heading({title}) {
  return (
    <h1 className="text-TopNavBG text-2xl md:text-4xl font-medium relative inline-block">{title}
    <span className="absolute inset-x-0 top-[110%] h-1 transform w-[60px] left-1/2 -translate-x-1/2 bg-primary "></span>
    </h1>
  )
}
