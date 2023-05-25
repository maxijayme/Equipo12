import { createContext, useState } from 'react'

const AppContext = createContext()

export const UserContextProvider = ({children}) =>{
    const [jwt,setJwt] = useState(
        ()=> window.localStorage.getItem('jwt')
    );
    return(
        <AppContext.Provider value={{jwt,setJwt}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;