import Navbar from '@/components/feed/Navbar'
import NavLink from '@/components/feed/NavLink'
import React from 'react'

const LayoutFeed = ({children}) => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* ========== NAVBAR ========== */}
      <Navbar>
        <NavLink />
      </Navbar>
      {children}
    </div>
  )
}

export default LayoutFeed