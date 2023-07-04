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
        productImage1: null,
        productImage2: null,
        productImage3: null,
        productImage4: null,
        productImage5: null
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const { productId } = useParams()

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
        setProductInfo({
            ...productInfo,
            [name]: value
        });
      };

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
        formData.append("productImage2", productInfo.productImage2)
        formData.append("productImage3", productInfo.productImage3)
        formData.append("productImage4", productInfo.productImage4)
        formData.append("productImage5", productInfo.productImage5)
        e.preventDefault()
        fetch("http://localhost:8080/api/edit/product", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                var categoryName = productInfo.productCategory
                    setProductInfo({
                        productName: "",
                        productPrice: "",
                        productDescription: "",
                        productCategory: "",
                        productImage1: null,
                        productImage2: null,
                        productImage3: null,
                        productImage4: null,
                        productImage5: null
                    })
                    setErrors({})
                    navigate("/category/" + categoryName)
                }
            )
            .catch(err => console.log(err))
    }
    
  return (
    <div>
        <FormProduct
            message={"Edit Product"}
            productInfo={productInfo}
            setProductInfo={setProductInfo}
            changeHandler={changeHandler}
            submitHandler={editProduct}
            errors={errors}
            submitValue={"Edit Product"}
        />
    </div>
  )
}

export default EditProduct