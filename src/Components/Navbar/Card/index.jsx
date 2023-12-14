

const Card = (data) => {
    return(
        <div className='bg-white cursor-pointer w-56 h-60 mt-4 rounded-lg border-solid border-2 border-gray-500'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/70 rounded-lg
                 text-black -xs m-2 px-3 py-0.5'>{data.data.category}</span>
                    <img className='w-full h-full mt-2 object-contain rounded-lg' src={data.data.image}                    alt={data.data.title}/>
                    <button className='absolute top-0 right-0 flex justify-center items-center
                     bg-red-200 w-6 h-6 rounded-full m-2 p-1 text-red-900'>
                        +
                        </button>
            </figure>

            <p className='flex justify-between truncate mr-2 ml-2'>
                <span className='text-sm font-light truncate'>{data.data.title}</span>
                <span className='text-m font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}


export default Card;