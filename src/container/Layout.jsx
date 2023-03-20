import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="w-screen h-[calc(100vh+80px)] relative flex flex-col justify-center items-center">
          {children}
        </div>
      )
}

export {Layout}