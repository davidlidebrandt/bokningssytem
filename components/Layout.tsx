import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import { AntdRegistry } from '@ant-design/nextjs-registry'

function Layout({children}:React.PropsWithChildren) {
  return (
    <>
    <AntdRegistry>
    <Header></Header>
    {children}
    <Footer></Footer>
    </AntdRegistry>
    </>
  )
}

export default Layout