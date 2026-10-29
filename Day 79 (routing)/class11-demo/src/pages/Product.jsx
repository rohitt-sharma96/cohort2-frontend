import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <div>

                <h1 className='text-center text-5xl mb-5 underline'>Product Page</h1>
            </div >
            <div className='text-center flex gap-4 justify-center'>
                <Link className='underline font-semibold' to='/product/men'>Men's Collection</Link>
                <Link className='underline font-semibold' to='/product/women'>Women's Collection</Link>
            </div>
        </div>
    )
}

export default Product