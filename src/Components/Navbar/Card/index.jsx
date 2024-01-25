import { useContext } from 'react';
import { ShoppingCartContext } from '../../../context';


const Card = (data) => {
    const context = useContext( ShoppingCartContext)

    const showProduct = (ProductDetail) => {
        context.openProductDetail()
        context.setProductToShow(ProductDetail)
    }

    const addProductsToCart= (e, productData) => {
        e.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) =>{
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return(
            <div className='absolute top-0 right-0 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-7 h-7 text-green-700'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
            </div>
            )
        } else{
            return(
            <div className='absolute top-0 right-0 flex justify-center items-center
                bg-red-200 w-6 h-6 rounded-full m-2 p-1 text-red-900'
                onClick={(e) =>  addProductsToCart(e, data.data)}
                > 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-6 h-6'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                   
                </svg>
            </div>
            )
        }
    }

    return(
        <div 
        className='bg-white cursor-pointer w-56 h-60 mt-4 rounded-lg border-solid border-2 border-gray-500'
        onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/70 rounded-lg
                 text-black -xs m-2 px-3 py-0.5'>{data.data.category}</span>
                    <img className='w-full h-full mt-2 object-contain rounded-lg' src={data.data.image}              alt={data.data.title}/>
                    {renderIcon(data.data.id)}
            </figure>

            <p className='flex justify-between truncate mr-2 ml-2'>
                <span className='text-sm font-light truncate'>{data.data.title}</span>
                <span className='text-m font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}


export default Card;