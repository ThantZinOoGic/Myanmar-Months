import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

export default function Detail() {
    const {id} = useParams();
    const {datas : month, error, isPending} = useFetch("https://json-server-for-myanmar-months.vercel.app/Tbl_Months/"+id);
    const navigate = useNavigate();
  return (
    <div className='container'>
        {error && <div>{error}</div>}
        {isPending && <div className='vh-100'>Loading ...</div>}
        {
        month &&<div className='continer mt-5'>
                <div className="row justify-content-around mb-4">
                    <div className="col-md-6" data-aos="zoom-in">
                        <img src={`/img/${month.id}.jpg`} alt="" className='img-thumbnail rounded'/>
                    </div>
                    <div className="col-md-6" data-aos="zoom-in">
                        <table className='text-start'>
                            <tbody>
                                <tr className='lh-lg' >
                                    <th className='col-3'>လအမည် - </th>
                                    <th>{month.MonthMm}</th>
                                </tr>
                                <tr className='lh-lg'>
                                    <th>Month - </th>
                                    <th>{month.MonthEn}</th>
                                </tr>
                                <tr className='lh-lg'>
                                    <th>ပွဲတော်  - </th>
                                    <th>{month.FestivalMm}</th>
                                </tr>
                                <tr className='lh-lg'>
                                    <th>Festival  -  </th>
                                    <th>{month.FestivalEn}</th>
                                </tr>
                            </tbody>
                        </table>
                        <p className='text-start' style={{ textIndent : "50px" }}>{month.Description}</p>
                    </div>
                </div>
                <p className='text-start' style={{ textIndent : "50px" }} data-aos="zoom-in">{month.Detail}</p>
                <button className='btn btn-secondary my-5' onClick={()=>navigate("/")} data-aos="zoom-in">Back To Home</button>
            </div>
        }
    </div>
  )
}
