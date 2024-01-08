import React, { ReactNode } from 'react'

function Layout({children}:React.PropsWithChildren) {
  return (
    <><header>Hey</header>
    {children}
    <footer>Hey again</footer>
    </>
  )
}

export default Layout