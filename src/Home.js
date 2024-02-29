import React from 'react';
import useFetch from './useFetch'
import Carousel from 'react-multi-carousel';
import MonthCard from './MonthCard';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import Nav from './Nav';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function Home() {
    const {datas : months, error, isPending} = useFetch("https://json-server-for-myanmar-months.vercel.app/Tbl_Months");
  return (<div className=''>
        <Nav/>
            <div className='container'>
              <h3 className='my-5 text-start' data-aos="zoom-in">မြန်မာလ နှင့် ပွဲတော်များ</h3>
                  {error && <div>{error}</div>}
                  {isPending && <div className='vh-100'>Loading...</div>}
                  {months && (<Carousel swipeable={false}
                                        draggable={false}
                                        responsive={responsive}
                                        infinite={true}
                                        autoPlaySpeed={1000}
                                        keyBoardControl={true}
                                        transitionDuration={500}>
                  {months.map(month => {
                      return <Link to={`/months/${month.id}`} key={month.id}><MonthCard  month={month} /></Link>
                      })}
                      </Carousel>)
                  }
          </div>
        </div>
  )
}
