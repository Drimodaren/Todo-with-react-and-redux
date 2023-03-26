import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'

export function Layout() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
