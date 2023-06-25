import React from 'react'
import FormProduct from './FormProduct'
import { useState, useEffect } from 'react'


const EditProduct = () => {
    const [productInfo, setProductInfo] = useState({
        productName: "",
        productPrice: "",
        productDescription: "",
        productCategory: "",
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

    useEffect(() => {
        fetch("http://localhost:8080/api/product/" + productId)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setProductInfo(res)
            })
            .catch(err => console.log(err))
    }, [])


    const editProduct = (e) => {
        const formData = new FormData()
        formData.append("productName", productInfo.productName)
        formData.append("productPrice", productInfo.productPrice)
        formData.append("productDescription", productInfo.productDescription)
        formData.append("productCategory", productInfo.productCategory)
        formData.append("productImage1", productInfo.productImage1)
        formData.append("productImage2", productInfo.productImage2)
        formData.append("productImage3", productInfo.productImage3)
        formData.append("productImage4", productInfo.productImage4)
        formData.append("productImage5", productInfo.productImage5)
        e.preventDefault()
        fetch("http://localhost:8080/api/edit/product", {
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
                        productPrice: "",
                        productDescription: "",
                        productCategory: "",
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
        <h2>Edit Product</h2>
        <FormProduct
            productInfo={productInfo}
            changeHandler={changeHandler}
            submitHandler={editProduct}
            errors={errors}
            submitValue={"Edit Product"}
        />
    </div>
  )
}

export default EditProduct