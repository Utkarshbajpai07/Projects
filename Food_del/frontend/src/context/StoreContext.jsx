import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    // eslint-disable-next-line no-unused-vars
    const[cartItems,setCartItem]=useState({});

    const addToCart

    const contextValue={
        food_list
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider