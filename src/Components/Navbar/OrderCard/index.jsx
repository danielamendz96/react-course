

const OrderCard= props => {
    const {id, title, imageUrl, price, handleDelete} = props
    let renderIcon 
    if (handleDelete) {
        renderIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
        className='w-6 h-6 cursor-pointer'
        onClick={() => handleDelete(id)}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        
    }
    return(
        <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center gap-2'>
                <figure className='w-2/4 max-h-max mx-auto'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium p-6'>${price}</p>
                {renderIcon}
            </div>
        </div>
    )

}


export default OrderCard