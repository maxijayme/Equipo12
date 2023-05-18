import { createContext, useState } from 'react'

const AppContext = createContext()

export const UserContextProvider = ({children}) =>{
    const [jwt,useJwt] = useState(
        ()=> window.localStorage.getItem('jwt')
    );
    return(
        <AppContext.Provider value={{jwt,useJwt}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;