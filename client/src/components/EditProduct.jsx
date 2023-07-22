import React from 'react'
import FormProduct from './FormProduct'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const EditProduct = (props) => {
    const {userInfo, sessionId} = props
    const [productInfo, setProductInfo] = useState({
        productName: "",
        productPrice: "",
        productDescription: "",
        productCategory: "",
        productImage1File: null,
        productImage2File: null,
        productImage3File: null,
    })
    const [errors, setErrors] = useState([])
    const [productCategory, setProductCategory] = useState("")
    const navigate = useNavigate()
    const { productId } = useParams()

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
        if (userInfo.accountType !== 'admin' || !userInfo || sessionId === '') {
          navigate('/');
        }
      }, [userInfo, sessionId]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:8080/product/" + productId)
            .then(res => res.json())
            .then(res => {
                console.log("edit product response" + res)
                setProductInfo(res)
                console.log("Product Category" + res.productCategory)
                setProductCategory(res.productCategory)
            })
            .catch(err => console.log(err))
    }, [])

    // change the productCategory state every time the productInfo.productCategory changes
    useEffect(() => {
        setProductCategory(productInfo.productCategory)
        console.log("Change product category " + productInfo.productCategory)
    }, [productInfo.productCategory])



    const editProduct = (e) => {
        const formData = new FormData()
        formData.append("productName", productInfo.productName)
        formData.append("productPrice", productInfo.productPrice)
        formData.append("productDescription", productInfo.productDescription)
        formData.append("productCategory", productInfo.productCategory)
        formData.append("productImage1File", productInfo.productImage1File)
        formData.append("productImage2File", productInfo.productImage2File)
        formData.append("productImage3File", productInfo.productImage3File)
        e.preventDefault()
        fetch("http://localhost:8080/product/edit/" + productId, {
            method: "PUT",
            body: formData
        })
            .then(async (res) => {
                if (res.status >= 200 && res.status < 300) {
                    const data = await res.json();
                    console.log("Edit product data" + data)
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