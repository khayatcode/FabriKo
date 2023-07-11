import React from 'react'
import FormProduct from './FormProduct'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";

const CreateProduct = () => {
  const [productInfo, setProductInfo] = useState({
    productName: "",
    productCategory: "",
    productPrice: "",
    productDescription: "",
    productImage1File: null,
    productImage2File: null,
    productImage3File: null
  })
  const [errors, setErrors] = useState([])
  const [productCategory, setProductCategory] = useState("")
  const navigate = useNavigate()

  const changeHandler = (e) => {
    if (e.target.name === "productImage1File" || e.target.name === "productImage2File" || e.target.name === "productImage3File") {
      setProductInfo({
        ...productInfo,
        [e.target.name]: e.target.files[0]
      })
    } else {
      setProductInfo({
        ...productInfo,
        [e.target.name]: e.target.value
      })
    }
  }

  useEffect(() => {
    setProductCategory(productInfo.productCategory)
    console.log("Change product category " + productInfo.productCategory)
  }, [productInfo.productCategory])

  const createProduct = (e) => {
    const formData = new FormData()
    formData.append("productName", productInfo.productName)
    formData.append("productCategory", productInfo.productCategory)
    formData.append("productPrice", productInfo.productPrice)
    formData.append("productDescription", productInfo.productDescription)
    formData.append("productImage1File", productInfo.productImage1File)
    formData.append("productImage2File", productInfo.productImage2File)
    formData.append("productImage3File", productInfo.productImage3File)
    e.preventDefault()
    fetch("http://localhost:8080/product/add", {
      method: "POST",
      body: formData
    })
      .then(async (res) => {
        if (res.status >= 200 && res.status < 300) {
          const data = await res.json();
          console.log("create product data" + data)
          console.log("create product response" + res)
          setProductInfo({
            productName: "",
            productCategory: "",
            productPrice: "",
            productDescription: "",
            productImage1File: null,
            productImage2File: null,
            productImage3File: null
          })
          setErrors([])
          navigate("/category/" + productCategory)
        } else {
          const data = await res.json();
          console.log(data)
          setErrors(data);
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