import React, { useState } from 'react'
import { createContext } from 'react'

export let ContextData = createContext()

function ContextProvider({children}) {
  const [data,setData] = useState()
  const [search,setSearch] = useState("")
  return (
    <ContextData.Provider value={{data,setData,search,setSearch}} >
      {children}
    </ContextData.Provider>
  )
}

export default ContextProvider
