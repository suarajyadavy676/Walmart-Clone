import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

function SmartPhone() {
  const [data,setData] = useState([])
  async function fetchData(){
    try {
      let res = await axios.get(`https://dummyjson.com/products/category/smartphones`)
      setData(res.data.products)  
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="grid grid-cols-1 w-[90%] mx-auto gap-4 my-[25vh] lg:my-[18vh] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* <h1 className='text-black'>Products Details</h1> */}
      {data?.map((ele) => (
        <Card {...ele} key={ele.id} />
      ))}
    </div>
  )
}

export default SmartPhone
