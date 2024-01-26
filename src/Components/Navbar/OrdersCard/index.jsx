
const OrdersCard= props => {
    const { totalPrice, totalProducts } = props
    
    return(
        <div className='flex justify-between items-center mb-4 border border-black'>
            <p>
                <span>24/01/2024</span>
                <span>{totalPrice}</span>
                <span>{totalProducts}</span>
            </p>
        </div>
    )

}


export default OrdersCard