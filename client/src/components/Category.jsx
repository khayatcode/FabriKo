import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Category = (props) => {
    const { categoryId, sessionId } =  props
    const [productsInCategory, setProductsInCategory] = useState([])
    const [category, setCategory] = useState({})

    useEffect(() => {
        fetch('http://localhost:8080/api/category/' + categoryId)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setCategory(res)
            })
            .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        fetch('http://localhost:8080/api/showProducts/category/' + categoryId)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setProductsInCategory(res)
            })
            .catch(err => console.log(err))
    }, [])
    

  return (
    <div>
        <h1>{category.name}</h1>
        <div className="row">
            {
                productsInCategory.map((product, idx) => {
                    return (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={idx}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.price}</p>
                                    <Link to={"/product/" + product._id}>View</Link>
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