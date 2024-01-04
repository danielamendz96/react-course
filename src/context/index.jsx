import { createContext, useState } from 'react'
export const ShoppingCartContext = createContext()

 export const ShoppingCartProvider = ({children}) => {

    // shopping cart. increment quantity
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    // Product Detail. open/closed
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail. Show product
    const [productToShow, setProductToShow] = useState({})
    
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
        }}>
             {children}
        </ShoppingCartContext.Provider>
       
    )
}