import { createContext, useState } from 'react'
export const ShoppingCartContext = createContext()

 export const ShoppingCartProvider = ({children}) => {

    // shopping cart. increment quantity
    const [count, setCount] = useState(0)
    

    // Shopping cart. add products to cart
    const [cartProducts, setCartProducts]= useState([])

    // shopping cart. order

    const [order, setOrder]= useState([])

    // Product Detail. open/closed
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail. Show product
    const [productToShow, setProductToShow] = useState({})

    // Checkout Side Menu. open/closed
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    
    
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            
        }}>
             {children}
        </ShoppingCartContext.Provider>
       
    )
}