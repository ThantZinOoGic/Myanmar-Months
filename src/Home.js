import React from 'react';
import useFetch from './useFetch'
import Carousel from 'react-multi-carousel';
import MonthCard from './MonthCard';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function Home() {
    const {datas : months, error, isPending} = useFetch("https://json-server-for-myanmar-months.vercel.app/Tbl_Months");
  return (<div className='container'>
        <h1 className='my-5'>မြန်မာလအသေးစိတ်များ</h1>
        <div className='row my-5 py-4'>
            {error && <div>{error}</div>}
            {isPending && <div className='vh-100'>Loading...</div>}
            {months && (<Carousel responsive={responsive}
                                    autoPlay={true}
                                    infinite={true}>
            {months.map(month => {
                return <Link to={`/months/${month.id}`} key={month.id}><MonthCard  month={month} /></Link>
                })}
                </Carousel>)
            }
        </div>
  </div>
  )
}
