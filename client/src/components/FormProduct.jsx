import React from 'react'

const FormProduct = (props) => {
    const { message, productInfo, setProductInfo, changeHandler, submitProduct, errors, submitValue } = props
    return (
        <div className='container d-flex justify-content-center' style={{ padding: '8%' }}>
            <div className='col-md-6'>
                <h1 className='text-center mb-3' style={{ fontWeight: 300 }}>{message}</h1>
                <form onSubmit={submitProduct}>
                    {Object.keys(errors).length > 0 ? (
                        <div>
                            {Object.keys(errors).map((key, index) => (
                                <p key={index}>{errors}</p>
                            ))}
                        </div>
                    ) : null}
                    <div className='form-floating mb-3'>
                        <input type='text' className='form-control' id='floatingInput' placeholder='Product Name' name='productName' value={productInfo.productName} onChange={changeHandler} />
                        <label htmlFor='floatingInput'>Product Name</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type='number' className='form-control' id='floatingInput' placeholder='Product Price' name='productPrice' value={productInfo.productPrice} onChange={changeHandler} />
                        <label htmlFor='floatingInput'>Product Price</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <select className='form-select' id='floatingSelect' aria-label='Floating label select example' name='productCategory' value={productInfo.productCategory} onChange={changeHandler}>
                            <option value=''>Select Category</option>
                            <option value=''>UpperWear</option>
                            <option value=''>BottomWear</option>
                            <option value=''>Shoes</option>
                        </select>
                        <label htmlFor='floatingSelect'>Product Category</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <textarea className='form-control' placeholder='Product Description' id='floatingTextarea2' style={{ height: '100px' }} name='productDescription' value={productInfo.productDescription} onChange={changeHandler}></textarea>
                        <label htmlFor='floatingTextarea2'>Product Description</label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='formFile' className='form-label'>Product Image 1</label>
                        <input type='file' className='form-control' id='formFile' placeholder='Product Image 1' name='productImage1' value={productInfo.productImage1} onChange={changeHandler} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='formFile' className='form-label'>Product Image 2</label>
                        <input type='file' className='form-control' id='formFile' placeholder='Product Image 2' name='productImage2' value={productInfo.productImage2} onChange={changeHandler} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='formFile' className='form-label'>Product Image 3</label>
                        <input type='file' className='form-control' id='formFile' placeholder='Product Image 3' name='productImage3' value={productInfo.productImage3} onChange={changeHandler} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='formFile' className='form-label'>Product Image 4</label>
                        <input type='file' className='form-control' id='formFile' placeholder='Product Image 4' name='productImage4' value={productInfo.productImage4} onChange={changeHandler} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='formFile' className='form-label'>Product Image 5</label>
                        <input type='file' className='form-control' id='formFile' placeholder='Product Image 5' name='productImage5' value={productInfo.productImage5} onChange={changeHandler} />
                    </div>
                    <button type='submit' className='btn btn-outline-dark'>{submitValue}</button>
                </form>
            </div>
        </div>
    )
}

export default FormProduct