import { createContext, useContext, useEffect, useState } from "react"
import {getItem} from "./Items";


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {

    const [item, setItem] = useState([])

    useEffect(() => {

        getItem().then((resp) => setItem(resp))

    })

  return (

      <AppContext.Provider value = {{item}}>{children}</AppContext.Provider>
      
    )
}
export default AppContextProvider