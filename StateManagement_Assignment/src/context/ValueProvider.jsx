import { createContext } from "react";
export const ValueContext = createContext();

export const ValueProvider = ({children})=>{
    const products = [
        {id:1, name:"HeadPhone", price:100, image:"https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww"},
        {id:2, name:"Iphone 13", price:200, image:"https://img.drz.lazcdn.com/g/kf/Sa2f5c8a217b34e73a124fe4a8e9ba4e90.jpg_720x720q80.jpg_.webp"},
        {id:3, name:"Computer", price:300, image:"https://t3.ftcdn.net/jpg/02/41/19/92/360_F_241199202_tHz63ApcgcNaopJ5BEmoY4IbJrYEucwd.jpg"},
    ]
    return (
        <ValueContext.Provider value={{products}}>
            {children}
        </ValueContext.Provider>
    )
}