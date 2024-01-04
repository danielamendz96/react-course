import { useContext } from 'react'
import { ShoppingCartContext } from '../../../context'


const ProductDetail = () => {
    const context = useContext( ShoppingCartContext)
    
    return(
        <aside 
        className={`${context.isProductDetailOpen? 'flex' : 'hidden'} flex-col fixed right-0 border border-gray-500 bg-white rounded-lg 
        w-[360px] h-[calc(100vh-80px)] top-[68px]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className='w-6 h-6 cursor-pointer'
                    onClick={()=> context.closeProductDetail()}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>

            </div>
            <figure className='px-6'>
                <img className='w-2/4 max-h-max mx-auto justify-center items-center rounded-lg' 
                src={context.productToShow.image} 
                alt={context.productToShow.title} 
                />
            </figure>
            <p className='flex flex-col overflow-auto p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md mb-2'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>

        </aside>
    )
}


export default ProductDetail