import React from 'react'
import { Link } from 'react-router-dom';
import MonthCard from './MonthCard';
import useFetch from './useFetch';
import Nav from './Nav';

export default function Months() {
    const {datas : months, error, isPending} = useFetch("https://json-server-for-myanmar-months.vercel.app/Tbl_Months");

  return (
    <div>
        {/* <Nav/> */}
        <div className="container">
            <div className='row mt-5'>
                {error && <div className='vh-100'>{error}</div>}
                {isPending && <div className='vh-100'>Loading ...</div>}
                {months && months.map(month => {
                      return (
                            <div className="col-md-4 mb-3" key={month.id}>
                                <Link to={`/months/${month.id}`} key={month.id} className='text-decoration-none'><MonthCard  month={month} /></Link>
                            </div>
                      ) 
                })}
        </div>
    </div>
        
    </div>

  )
}
