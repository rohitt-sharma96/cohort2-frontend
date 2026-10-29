import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const AllProducts = () => {

    const productData = useContext(ProductDataContext);

    let renderData = ''
    if(productData.length > 0){
        renderData = 
                productData.map((elem, idx) => {
                    return <Link className='product' key={idx}  to={`/products/${elem.id}`}>
                        <div className='image title' >
                            <img src={elem.image} alt="" />
                            <h2>{elem.title} </h2>
                        </div>
                    </Link>
                })
    }

    return (
        <div className='all-products'>
            { renderData }
        </div>
    )
}

export default AllProducts
