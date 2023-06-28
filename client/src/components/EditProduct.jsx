import React from 'react'
import FormProduct from './FormProduct'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const EditProduct = (props) => {
    const navigate = useNavigate();
    const {product, setProduct, productId, setProductId} = props;
    const [errors, setErrors] = useState({})
    const [productInfo, setProductInfo] = useState({
        productId: productId,
        productName: "",
        productPrice: "",
        productDescription: "",
        productCategory: ""
      });

    const changeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            productId : productId,
            [e.target.name]: e.target.value 
        })
        console.log(productInfo)
    }

    useEffect(() => {
        fetch("http://localhost:8080/product/" + productId)
            .then(res => res.json())
            .then(res => {
                setProduct(res)
            })
            .catch(err => console.log(err))
    }, [])
    

    const editProduct = (e) => {
        e.preventDefault();
        console.log(productInfo)
        const requestData = {
            productId : productInfo._id,
            productName: productInfo.productName,
            productPrice: productInfo.productPrice,
            productDescription: productInfo.productDescription,
            productCategory: productInfo.productCategory
        };
        fetch(`http://localhost:8080/product/edit/` + productId, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestData)
        })
          .then(res => {
            console.log(res);
            if (res.ok) {
              setProductInfo({
                productName: "",
                productPrice: "",
                productDescription: "",
                productCategory: ""
              });
              setErrors({});
              navigate("/product/" + productId)
            } else {
              return res.json().then(data => {
                setErrors(data.errors);
              });
            }
          })
          .catch(err => console.log(err));
      };
    
  return (
    <div className='container d-flex justify-content-center' style={{ padding: '8%' }}>
      <div className='col-md-6'>
       <h1 className='text-center mb-3' style={{ fontWeight: 300 }}>Edit Product</h1>
       <h3>{product.productName}</h3>
            <form onSubmit={editProduct}>
                <input type="hidden" name='productId' value={productId} />
                {errors && Object.keys(errors).length > 0 ? (
                    <div>
                        {Object.keys(errors).map((key, index) => (
                            <p key={index}>{errors[key]}</p>
                        ))}
                    </div>
                ) : null}
                <div className='form-floating mb-3'>
                    <input type='text' className='form-control' id='floatingInput' placeholder='Product Name' name='productName' onChange={changeHandler} />
                    <label htmlFor='floatingInput'>Product Name</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='double' step={.01} className='form-control' id='floatingInput' placeholder='Product Price' name='productPrice'  onChange={changeHandler} />
                    <label htmlFor='floatingInput'>Product Price</label>
                </div>
                <div className='form-floating mb-3'>
                    <select className='form-select' id='floatingSelect' aria-label='Floating label select example' name='productCategory' onChange={changeHandler}>
                        <option value=''>Select Category</option>
                        <option value='Upper Wear'>Upperwear</option>
                        <option value='Bottom Wear'>Bottomwear</option>
                        <option value='Shoes'>Shoes</option>
                    </select>
                    <label htmlFor='floatingSelect'>Product Category</label>
                </div>
                <div className='form-floating mb-3'>
                    <textarea className='form-control' placeholder='Product Description' id='floatingTextarea2' style={{ height: '100px' }} name='productDescription' onChange={changeHandler}></textarea>
                    <label htmlFor='floatingTextarea2'>Product Description</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='hidden' className='form-control'  placeholder='Product Name' name='productId' value={product.productId} />
                </div>
                <button type='submit' className='btn btn-outline-dark'>Edit</button>
            </form>
          </div>
    </div>
  )
}

export default EditProduct;