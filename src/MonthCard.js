import React from 'react'

export default function MonthCard({month}) {
  return (
      <div className='hlink mx-2' data-aos="zoom-in">
        <div className='card'>
          <div style={{ height : "200px", overflow : "hidden" }}>
            <img src={`./img/${month.id}.jpg`} alt="" className="img-thumbnail card-img" style={{ height : "200px" }}/>
          </div>
          <div className="para py-3"><p>{month.MonthMm}</p></div>
        </div>
      </div>
  )
}
