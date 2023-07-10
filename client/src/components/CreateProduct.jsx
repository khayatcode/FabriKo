import React from 'react'
import FormProduct from './FormProduct'
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

const CreateProduct = () => {
    const [productInfo, setProductInfo] = useState({
        productName: "",
        productCategory: "",
        productPrice: "",
        productDescription: "",
        productImage1: "example",
        productImageTest: null
        // productImage2: null,
        // productImage3: null,
        // productImage4: null,
        // productImage5: null
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    // const changeHandler = (e) => {
    //   const name = e.target.name;
    //   const value = e.target.type == "file" ? e.target.files[0] : e.target.value;
    //   setProductInfo({
    //     ...productInfo,
    //     [name]: value
    //   });
    // };

    const changeHandler = (e) => {
      if(e.target.name === "productImageTest"){
          setProductInfo({
              ...productInfo,
              productImageTest: e.target.files[0],
          })
      } else {
      setProductInfo({
          ...productInfo,
          [e.target.name]: e.target.value
      })
    }
  }

    const createProduct = (e) => {
      const formData = new FormData()
      formData.append("productName", productInfo.productName)
      formData.append("productCategory", productInfo.productCategory)
      formData.append("productPrice", productInfo.productPrice)
      formData.append("productDescription", productInfo.productDescription)
      formData.append("productImageTest", productInfo.productImageTest)
      // formData.append("productImage1", productInfo.productImage1)
      // formData.append("productImage2", productInfo.productImage2)
      // formData.append("productImage3", productInfo.productImage3)
      // formData.append("productImage4", productInfo.productImage4)
      // formData.append("productImage5", productInfo.productImage5)
      e.preventDefault()
      fetch("http://localhost:8080/product/add", {
        method: "POST",
        body: formData
      })
      .then(async (res) => {
        if (res.status >= 200 && res.status < 300) {
            const data = await res.json();
            console.log("create product response" + data)
            setProductInfo({
              productName: "",
              productCategory: "",
              productPrice: "",
              productDescription: "",
              productImageTest: null,
              productImage1: "example"
              // productImage2: null,
              // productImage3: null,
              // productImage4: null,
              // productImage5: null
            })
            setErrors([])
            navigate("/")
        } else {
            const data = await res.json();
            console.log(data)
            setErrors(data);
        }
      })
        // .then(res => res.json())
        // .then(res => {
        //   console.log(res)
        //     setProductInfo({
        //       productName: "",
        //       productCategory: "",
        //       productPrice: "",
        //       productDescription: "",
        //       productImage1: null
        //       // productImage2: null,
        //       // productImage3: null,
        //       // productImage4: null,
        //       // productImage5: null
        //     })
        //     setErrors({})
        //     navigate("/")
        //   }
        // )
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