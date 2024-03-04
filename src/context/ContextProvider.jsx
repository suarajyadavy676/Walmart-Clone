import React, { useState } from 'react'
import { createContext } from 'react'

export let ContextData = createContext()

function ContextProvider({children}) {
  const [data,setData] = useState()
  return (
    <ContextData.Provider value={{data,setData}} >
      {children}
    </ContextData.Provider>
  )
}

export default ContextProvider
