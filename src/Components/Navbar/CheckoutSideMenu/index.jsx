import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../../context'
import { totalPrice } from '../../../Utils'
import OrderCard from '../OrderCard'



const CheckoutSideMenu = () => {
    const context = useContext( ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '24/01/2024',
            products: context.cartProducts,
            totalProducts: context.cartProducts.lenght,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCount(0)
        context.setCartProducts([])
    }
    
    return(
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-gray-500 bg-white rounded-lg 
        w-[360px] h-[calc(100vh-80px)] top-[68px]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl text-red-300'>My Order</h2>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className='w-6 h-6 cursor-pointer'
                    onClick={()=> context.closeCheckoutSideMenu()}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>

            </div>

            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                    key= {product.id}
                    id= {product.id}
                    title= {product.title}
                    imageUrl= {product.image}
                    price= {product.price}
                    handleDelete= {handleDelete}
                    
                    />

                )) 
                 
            }

            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light text-xl'>Total: </span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='my-orders/last'>
                  <button 
                  className='bg-red-200 text-red-900 w-full py-3 mt-6 rounded-lg font-semibold'
                onClick={() => handleCheckout()}>Checkout
                </button>
                </Link>
              
            </div>
        </aside>
    )
}


export default CheckoutSideMenu