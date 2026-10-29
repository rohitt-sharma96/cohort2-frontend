import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDets = () => {

  const productData = useContext(ProductDataContext)

  const param = useParams()


  let selectedProduct = ''
  if (productData.length > 0) {
    selectedProduct = productData.find((elem) => {
      return param.id == elem.id
    })
  }
  console.log(selectedProduct)


  return (
    <div>
      {<div className='image title' >
        <img src={selectedProduct.image} alt="" />
        <h2>{selectedProduct.title} </h2>
        <h4>$ {selectedProduct.price} only</h4>
      </div>}
    </div>

  )
}

export default ProductDets
