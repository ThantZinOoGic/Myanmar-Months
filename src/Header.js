import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-dark py-2' data-aos="zoom-in">
        <div className="col-3">
            <Link to="/" className='btn btn-secondary mx-2'>Home</Link>
            <Link to="/months" className='btn btn-secondary mx-2'>Months</Link>
        </div>
    </div>
  )
}
