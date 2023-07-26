import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../css/CategoryPage.css'


const CategoryPage = (props) => {
    const { sessionId, userInfo } = props
    const [productsInCategory, setProductsInCategory] = useState([])
    const [loaded, setLoaded] = useState(false)
    const { categoryName } = useParams()
    const navigate = useNavigate()

    // Do everytime I run this component it will scroll to the top of the page in smooth fashion
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [categoryName])

    useEffect(() => {
        if (categoryName !== "upper" && categoryName !== "bottom" && categoryName !== "shoes") {
            navigate("/error")
        }
        else {
            fetch('http://localhost:8080/product/api/' + categoryName)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    setProductsInCategory(res)
                    setLoaded(true)
                })
                .catch(err => console.log(err))
        }
    }, [categoryName])

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
        <div className='container-fluid containerCategory'>
            {loaded && (
                <>
                    <div className='categroyTitle'>
                        <h1 className='mb-4 text-decoration-underline' style={{ fontWeight: 300 }}>{capitalizedCategoryName} Category</h1>
                    </div>

                    <div className=" d-flex justify-content-evenly flex-wrap col-10 p-3 containerProducts mx-auto">
                        {productsInCategory.length == 0 ? <h3 className='text-center' style={{ marginTop: '150px' }}>No products in this category.</h3>
                            :
                            productsInCategory.map((product, index) => {
                                return (
                                    <div className="col-md-3 d-flex flex-column align-items-center singleProduct" key={index}>
                                        <Link to={"/product/view/" + product.id}>
                                            <img className="productImage" src={product.productImage1} alt={product.productName} style={{ backgroundColor: '#E8E8E8', transition: 'transform 0.2s' }} onMouseOver={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                            }}
                                                onMouseOut={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }} />
                                        </Link>
                                        <div className="d-flex flex-column productDiscription">
                                            <p className="text-start text-muted" style={{ wordWrap: 'break-word' }}>
                                                {product.productName}
                                            </p>
                                            <p className="text-start fw-bold" >
                                                ${product.productPrice} USD
                                            </p>
                                        </div>

                                        {/* <div className='d-flex flex-row gap-2'>
                                            <button className='btn btn-outline-primary btn-sm' onClick={() => viewProduct(product.id)}>View</button>
                                            {userInfo.accountType == "admin" ?
                                                <div className='d-flex gap-2'>
                                                    <button className='btn btn-outline-primary btn-sm ' onClick={() => editProduct(product.id)}>Edit</button>
                                                    <button className='btn btn-outline-danger btn-sm' onClick={() => deleteProduct(product.id)}>Delete</button>
                                                </div>
                                                : null}
                                        </div> */}
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </>
            )
            }

        </div>
    )
}

export default CategoryPage