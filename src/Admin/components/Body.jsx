import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Body() {
  return (
    <div className="client-body">
        <Outlet />
    </div>
  )
}
