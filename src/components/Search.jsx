import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ContextData } from '../context/ContextProvider'
import Card from './Card'

function Search() {
  const {search} = useContext(ContextData)
  // console.log(search)
  const [data,setData] = useState([])
  // console.log(data)
  async function fetchApi(){
    try {
      let res = await axios.get(`https://dummyjson.com/products/search?q=${search}`)
      setData(res.data.products)
      
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{
    fetchApi()
  },[search])
  return (
    <>
    <div className="grid grid-cols-1 w-[90%] mx-auto gap-4 my-[25vh] lg:my-[18vh] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* <h1 className='text-black'>Products Details</h1> */}
      {data?.map((ele) => (
        <Card {...ele} key={ele.id} />
      ))}
    </div>
    </>
  )
}

export default Search
