import React from 'react'
import FormProduct from './FormProduct'
import { useState } from 'react'

const CreateProduct = () => {
    const [productInfo, setProductInfo] = useState({
        productName: "",
        productCategory: "",
        productPrice: "",
        productDescription: "",
        productImage1: "",
        productImage2: "",
        productImage3: "",
        productImage4: "",
        productImage5: ""
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const createProduct = (e) => {
      const formData = new FormData()
      formData.append("productName", productInfo.productName)
      formData.append("productCategory", productInfo.productCategory)
      formData.append("productPrice", productInfo.productPrice)
      formData.append("productDescription", productInfo.productDescription)
      formData.append("productImage1", productInfo.productImage1)
      formData.append("productImage2", productInfo.productImage2)
      formData.append("productImage3", productInfo.productImage3)
      formData.append("productImage4", productInfo.productImage4)
      formData.append("productImage5", productInfo.productImage5)
      e.preventDefault()
      fetch("http://localhost:8080/api/create/product", {
        method: "POST",
        body: formData
      })
        .then(res => {
          console.log(res)
          if (res.data && res.data.errors) {
            setErrors(res.data.errors)
          } else {
            setProductInfo({
              productName: "",
              productCategory: "",
              productPrice: "",
              productDescription: "",
              productImage1: "",
              productImage2: "",
              productImage3: "",
              productImage4: "",
              productImage5: ""
            })
            setErrors({})
          }
        })
        .catch(err => console.log(err))
    }


  return (
    <div>
      <FormProduct
        message="Create a Product"
        productInfo={productInfo}
        setProductInfo={setProductInfo}
        errors={errors}
        changeHandler={changeHandler}
        submitProduct={createProduct}
        submitValue="Create Product" 
      />
    </div>
  )
}

export default CreateProduct