import React from 'react'
import { useState, useEffect } from 'react'

const ViewProduct = (props) => {
    const { productId } = props
    const [product, setProduct] = useState({})
    const [cart, setCart] = useState({
        productId: 0,
        quantity: 0,
        size: '',
        total: 0
    })
    const [errors, setErrors] = useState({})
    const [totalPrice, setTotalPrice] = useState(0);

    const onChange = (e) => {
        setCart({
            ...cart,
            [e.target.name]: e.target.value
        })
    }

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setCart({
    //       ...cart,
    //       [name]: value
    //     });
    //     if (name === 'quantity') {
    //       setTotalPrice(product.price * value);
    //     }
    //   };

    useEffect(() => {
        fetch(`http://localhost:3000/products/${productId}`)
          .then(response => response.json())
          .then(product => {
            setProduct(product);
            setTotalPrice(product.price);
          });
      }, [productId])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(cart)
        fetch("http://localhost:8080/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart)
        })
            .then(res => {
                console.log(res)
                if (res.data && res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    setCart({
                        productId: 0,
                        quantity: 0,
                        size: ''
                    })
                    setErrors({})
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{product.price}</p>
                            <img src={product.image1} alt={product.name} />
                            <img src={product.image2} alt={product.name} />
                            <img src={product.image3} alt={product.name} />
                            <img src={product.image4} alt={product.name} />
                            <img src={product.image5} alt={product.name} />
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="quantity">Quantity:</label>
                                <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={onChangeChange} />
                                <label htmlFor="size">Size:</label>
                                <select id="size" name="size" value={formData.size} onChange={onChangeChange}>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                                <input type="hidden" name="productId" value={productId} />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ViewProduct