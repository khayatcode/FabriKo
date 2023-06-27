import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

const FormProduct = (props) => {
    const { submitProduct, submitValue } = props
    const [productInfo, setProductInfo] = useState({
        productName: "",
        productCategory: "",
        productPrice: "",
        productDescription: ""
    })

    const changeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const createProduct = (e) => {
        e.preventDefault()
        console.log(productInfo)
        fetch("http://localhost:8080/product/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
          .then(res => {
            if (!res.ok) {
                throw new Error("Add Product failed. Please try again.");
            }
            return res.json();
          })
          .then (data => {
            setProductInfo({
                productName : "",
                productCategory : "",
                productPrice : "",
                productDescription : "",

            })
          })
          .catch(err => console.log(err))
      }

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={createProduct}>
                {/* {errors && Object.keys(errors).length > 0 ? (
                    <div>
                        {Object.keys(errors).map((key, index) => (
                            <p key={index}>{errors[key]}</p>
                        ))}
                    </div>
                ) : null} */}
                <div className='form-floating'>
                    <input type='text' className='form-control' id='floatingInput' placeholder='Product Name' name='productName' onChange={changeHandler} />
                    <label htmlFor='floatingInput'>Product Name</label>
                </div>
                <div className='form-floating'>
                    <input type='double' step={.01} className='form-control' id='floatingInput' placeholder='Product Price' name='productPrice'  onChange={changeHandler} />
                    <label htmlFor='floatingInput'>Product Price</label>
                </div>
                <div className='form-floating'>
                    <select className='form-select' id='floatingSelect' aria-label='Floating label select example' name='productCategory' onChange={changeHandler}>
                        <option value=''>Select Category</option>
                        <option value='Mens'>Mens</option>
                        <option value='Womens'>Womens</option>
                        <option value='Childrens'>Childrens</option>
                    </select>
                    <label htmlFor='floatingSelect'>Product Category</label>
                </div>
                <div className='form-floating'>
                    <textarea className='form-control' placeholder='Product Description' id='floatingTextarea2' style={{ height: '100px' }} name='productDescription' onChange={changeHandler}></textarea>
                    <label htmlFor='floatingTextarea2'>Product Description</label>
                </div>
                {/* <div className='form-floating'>
                    <input type='file' className='form-control' id='floatingInput' placeholder='Product Image 1' name='productImage1' value={productInfo.productImage1} onChange={changeHandler} />
                    <label htmlFor='floatingInput'>Product Image 1</label>
                </div>
                <div className='form-floating'>
                    <input type='file' className='form-control' id='floatingInput' placeholder='Product Image 2' name='productImage2' value={productInfo.productImage2} onChange={changeHandler} />
                    <label htmlFor='floatingInput'>Product Image 2</label>
                </div>
                <div className='form-floating'>
                    <input type='file' className='form-control' id='floatingInput' placeholder='Product Image 3' name='productImage3' value={productInfo.productImage3} onChange={changeHandler} />
                    <label htmlFor='floatingInput'>Product Image 3</label>
                </div>
                <div className='form-floating'>
                    <input type='file' className='form-control' id='floatingInput' placeholder='Product Image 4' name='productImage4' value={productInfo.productImage4} onChange={changeHandler} />
                    <label htmlFor='floatingInput'>Product Image 4</label>
                </div>
                <div className='form-floating'>
                    <input type='file' className='form-control' id='floatingInput' placeholder='Product Image 5' name='productImage5' value={productInfo.productImage5} onChange={changeHandler} />
                    <label htmlFor='floatingInput'>Product Image 5</label>
                </div> */}
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default FormProduct