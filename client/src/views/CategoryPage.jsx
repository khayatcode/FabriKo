import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const CategoryPage = (props) => {
    const { sessionId } = props
    const [productsInCategory, setProductsInCategory] = useState([])
    const { categoryName } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (categoryName !== "upper" && categoryName !== "bottom" && categoryName !== "shoes") {
            navigate("/category/error")
            }
            else {
        fetch('http://localhost:8080/product/api/' + categoryName)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setProductsInCategory(res)
            })
            .catch(err => console.log(err))
            }
    }, [])

    const deleteProduct = (productId) => {
        console.log(productId)
        fetch("http://localhost:8080/product/delete/" + productId, {
            method: "DELETE"
        })
            .then(res => {
                if (res.status === 200) {
                    const updatedProducts = productsInCategory.filter(product => product.id !== productId)
                    setProductsInCategory(updatedProducts)
                }
            })
            .catch(err => console.log(err))
    }

    const editProduct = (productId) => {
        navigate("/product/edit/" + productId)
    }

    const viewProduct = (productId) => {
        navigate("/product/view/" + productId)
    }

    const capitalizedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <div style={{ padding: '13%' }}>
            <div className='fixed-top bg-white' style={{ zIndex: 1, paddingTop: '8%' }}>
                <h1 className='mb-4' style={{ fontWeight: 300 }}>{capitalizedCategoryName} Category</h1>
            </div>
            <div >
                <div className="row p-3">
                    {productsInCategory.length == 0 ? <h1 className='text-center mt-5'>No products in this category.</h1>
                        :
                    productsInCategory.map((product, index) => {
                        return (
                            <div className="col-sm-4 d-flex flex-column align-items-center gap-2" key={index}>
                                <Link to={"/product/view/" + product.id}>
                                    <img src={product.productImage1} alt={product.productName} style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }} />
                                </Link>
                                <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                                    <p className='text-start text-muted' style={{ fontSize: '15px' }}>{product.productName}</p>
                                    <p className='text-start fw-bold' style={{ fontSize: '12px' }}>${product.productPrice}USD</p>
                                </div>
                                <div className='d-flex flex-row gap-2'>
                                    <button className='btn btn-outline-primary btn-sm' onClick={() => viewProduct(product.id)}>View</button>
                                    {sessionId ? <div>
                                        <button className='btn btn-outline-primary btn-sm' onClick={() => editProduct(product.id)}>Edit</button>
                                        <button className='btn btn-outline-primary btn-sm' onClick={() => deleteProduct(product.id)}>Delete</button>
                                    </div> : null}
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div>

        </div>
  )
}

export default CategoryPage