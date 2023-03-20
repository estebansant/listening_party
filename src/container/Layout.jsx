import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="w-screen h-screen relative flex flex-col justify-center items-center">
          {children}
        </div>
      )
}

export {Layout}