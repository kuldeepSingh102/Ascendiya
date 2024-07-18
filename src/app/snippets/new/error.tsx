'use client'
import React from 'react'

interface ErrorPageProps{
    error: Error,
    reset : ()=> null
}
export default function ErrorPage<ErrorPageProps>(){
  return (
    <div>Oops!!!!</div>
  )
}
