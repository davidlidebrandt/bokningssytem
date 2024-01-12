import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({children}:React.PropsWithChildren) {
  return (
    <>
    <Header></Header>
    {children}
    <Footer></Footer>
    </>
  )
}

export default Layout