import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import App from '../App'
import UpperWear1 from '../images/upperWear1.webp'

const Category = (props) => {
    const { categoryId, selectedCategory, userInfo, productId, setProductId} =  props
    const [productsInCategory, setProductsInCategory] = useState([])
    const [product , setProduct] = useState({});
    const {category} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/product/api/' + category)
            .then(res => res.json())
            .then(res => {
                setProductsInCategory(res)
            })
            .catch(err => console.log(err))
    }, [])
    
    
    const deleteProduct = (productId) => {
        console.log(productId)
        fetch("http://localhost:8080/product/delete/" + productId, {
            method: "DELETE"
        })
            .then(res => {
                window.location.reload(true);
            })
            .catch(err => console.log(err))
    }

    const editProduct = (productId) => {
        fetch("http://localhost:8080/product/edit/" + productId)
        .then(res => res.json()
        )
        .then (res => {setProduct(res);
            console.log("from Category ---" + productId);
        setProductId(productId)}
        )
        .catch(err => console.log(err))
        navigate("/product/edit/" + productId )
    }

    const viewProduct = (productId) => {
        fetch("http://localhost:8080/product/" + productId)
        .then(res => res.json()
        )
        .then (res => {setProduct(res)
            setProductId(res.id)
        navigate("/product/view/" + productId )
        }
        )
        .catch(err => console.log(err))
        
    }

  return (
    <div style={{ padding: '13%' }}>
         <div className='fixed-top bg-white' style={{ zIndex: 1, paddingTop: '8%' }}>
                <h1 className='mb-4' style={{ fontWeight: 300 }}>{category}</h1>
            </div>
        <div className="row p-3">
            {
                productsInCategory.map((product, idx) => {
                    return (
                        <div className="col-sm-4 d-flex flex-column align-items-center gap-2 mb-2" key={idx}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{product.productName}</h5>
                                    <img src={UpperWear1} alt="UpperWear1" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} 
                                    onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.05)';}}
                                    onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1)';}}
                                    onClick={() => viewProduct(product.id)}
                                    />
                                    <p className='text-center text-muted' style={{ fontSize: '15px' }}>{product.productDescription}</p>
                                    <p className='text-center fw-bold' style={{ fontSize: '12px' }}>${product.productPrice} USD</p>
                                    <br />
                                    {userInfo.accountType === "admin" && (
                                    <button className="btn btn-outline-dark" onClick={() => deleteProduct(product.id)}>Delete</button>
                        )}
                                    {userInfo.accountType === "admin" && (
                                                <button className="btn btn-outline-dark" onClick={() => editProduct(product.id)}>Edit</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Category;