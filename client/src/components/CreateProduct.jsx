import React from 'react'
import FormProduct from './FormProduct'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
    const navigate = useNavigate();
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
      e.preventDefault()
      fetch("http://localhost:8080/product/add", {
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
            navigate("/")
          }
        })
        .catch(err => console.log(err))
    }


  return (
    <div>
      <h2>Create Product</h2>
      <FormProduct
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

export default CreateProduct;