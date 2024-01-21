"use client"
import Link from 'next/link'
import React from 'react'

const Button = ({ className, title, to }) => {
  return (
    <Link href={`${to}`}  className={`py-3 px-5 text-white text-sm uppercase  rounded-md ${className}`}>{title}</Link>
  )
}

export default Button