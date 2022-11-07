import React,{useEffect} from 'react'
import { useState } from 'react';
import SingleTable from './SingleTable'
import axios from '../context/axios'
import Navbar from './Navbar'

const Tables = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    async function getData(){
      try{
        const res = await axios.get('/getData')
        setData(res.data)
        console.log("result from fetching of data : ",res.data);
      }catch(error){
        console.log("error in getting data")
      }
    }
    getData()


  }, []);
  return (
    <div>
      <div><Navbar/></div>
      <div className="container mx-auto px-4 sm:px-8">
    <div className="py-8">
      <div>
        <h2 className="text-2xl font-semibold leading-tight">Invoices</h2>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div
          className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
        >
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Client / Address
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Amount By:
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Issued Bill
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                ></th>
              </tr>
            </thead>
            <tbody>
              
              {/*  */}
              <>
              {data ? data.map((ele)=>(
            <SingleTable data={ele} key={ele.PhoneNumber} />
          )) : "no data to show"}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Tables