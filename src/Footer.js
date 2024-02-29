import React from 'react'

export default function Footer() {
  return (
    <div className='bg-light p-4 text-center mt-3'>
        <div className="row justify-content-center mb-3">
            <div className='col-1'>
                <a href="#">
                <img src="./facebook.svg" alt="" style={{ width : "25px" }} />
                </a>
            </div>
            <div className="col-1">
                <a href="#">
                <img src="./twitter.svg" alt=""  style={{ width : "25px" }}/>
                </a>
            </div>
            </div>
        <div>© All rights reserved by WordPress River</div>
    </div>
  )
}
