import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Category = (props) => {
    const { categoryId, selectedCategory, userInfo, setUserInfo} =  props
    const [productsInCategory, setProductsInCategory] = useState([])
    const {category} = useParams();
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch('http://localhost:8080/api/category/' + categoryId)
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res)
    //             setCategory(res)
    //         })
    //         .catch(err => console.log(err))
    // }, [])


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
                navigate(window.location.pathname);
            })
            .catch(err => console.log(err))
    }
    

  return (
    <div>
        <h1>Test</h1>
        <div className="row">
            {
                productsInCategory.map((product, idx) => {
                    return (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={idx}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{product.productName}</h5>
                                    <p className="card-text">{product.productDescription}</p>
                                    <p className="card-text">{product.productPrice}</p>
                                    <Link to={"/product/" + product.id}>View</Link>
                                    <br />
                                    {userInfo.accountType === "admin" && (
                                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
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