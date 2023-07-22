import React from 'react'

const FormProduct = (props) => {
    const { message, productInfo, setProductInfo, changeHandler, submitProduct, errors, submitValue } = props
    return (
        <div className='container d-flex justify-content-center' style={{ height: '80vh', marginTop: '200px' }}>
            <div className='col-md-10'>
                <h1 className='text-center mb-3' style={{ fontWeight: 300 }}>{message}</h1>
                <form onSubmit={submitProduct}>
                    {errors.length > 0 && (
                        <div className='alert alert-danger'>
                            {errors.map((error, index) => (
                                <div key={index}>{error}</div>
                            ))}
                        </div>
                    )}
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
                            <option disabled value=''>Select Category</option>
                            <option value='upper'>UpperWear</option>
                            <option value='bottom'>BottomWear</option>
                            <option value='shoes'>Shoes</option>
                        </select>
                        <label htmlFor='floatingSelect'>Product Category</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <textarea className='form-control' placeholder='Product Description' id='floatingTextarea2' style={{ height: '100px' }} name='productDescription' value={productInfo.productDescription} onChange={changeHandler}></textarea>
                        <label htmlFor='floatingTextarea2'>Product Description</label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='formFile' className='form-label'>Product Image 1</label>
                        <input type='file' className='form-control' id='formFile' placeholder='Product Image 1' name='productImage1File' onChange={changeHandler} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='formFile' className='form-label'>Product Image 2</label>
                        <input type='file' className='form-control' id='formFile' placeholder='Product Image 2' name='productImage2File' onChange={changeHandler} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='formFile' className='form-label'>Product Image 3</label>
                        <input type='file' className='form-control' id='formFile' placeholder='Product Image 3' name='productImage3File' onChange={changeHandler} />
                    </div>
                    <button type='submit' className='btn btn-outline-dark'>{submitValue}</button>
                </form>
            </div>
        </div>
    )
}

export default FormProduct