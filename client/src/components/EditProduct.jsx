import React from 'react'
import FormProduct from './FormProduct'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const EditProduct = () => {
    const [productInfo, setProductInfo] = useState({
        productName: "",
        productPrice: "",
        productDescription: "",
        productCategory: "",
        productImage1: ""
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const { productId } = useParams()

    const changeHandler = (e) => {
        if(e.target.name === "productImage1"){
            setProductInfo({
                ...productInfo,
                productImage1: e.target.files[0],
            })
        } else {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
      }
    }

    useEffect(() => {
        fetch("http://localhost:8080/product/" + productId)
            .then(res => res.json())
            .then(res => {
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
        // formData.append("productImage2", productInfo.productImage2)
        // formData.append("productImage3", productInfo.productImage3)
        // formData.append("productImage4", productInfo.productImage4)
        // formData.append("productImage5", productInfo.productImage5)
        e.preventDefault()
        fetch("http://localhost:8080/product/edit/" + productId, {
            method: "PUT",
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                console.log("edit product response")
                console.log(res)
                    setProductInfo({
                        productName: "",
                        productPrice: "",
                        productDescription: "",
                        productCategory: "",
                        productImage1: ""
                    })
                    setErrors({})
                    navigate("/")
                }
            )
            .catch(err => {
                console.log(err)
                console.log("edit product error")
            })
    }
    
  return (
    <div>
        <FormProduct
            message={"Edit Product"}
            productInfo={productInfo}
            setProductInfo={setProductInfo}
            changeHandler={changeHandler}
            submitProduct={editProduct}
            errors={errors}
            submitValue={"Edit Product"}
        />
    </div>
  )
}

export default EditProduct