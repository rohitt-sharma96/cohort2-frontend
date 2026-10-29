import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../api/ProductsApi';

export const ProductDataContext = createContext();

const ProductContext = (props) => {

    const [productData, setProductData] = useState([])

   const setData = async () =>{
    const data = await getData();
    setProductData(data)
   }

    useEffect(() => {
        setData()
    }, [])

    return (
        <ProductDataContext.Provider value={productData}>
            {props.children}
        </ProductDataContext.Provider>
    )
}

export default ProductContext
