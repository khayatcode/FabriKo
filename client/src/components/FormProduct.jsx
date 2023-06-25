import React from 'react'

const FormProduct = (props) => {
    const { productInfo, setProductInfo, changeHandler, submitProduct, errors, submiValue } = props
    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={createProduct}>
                {Object.keys(errors).length > 0 ? (
                    <div>
                        {Object.keys(errors).map((key, index) => (
                            <p key={index}>{errors}</p>
                        ))}
                    </div>
                ) : null}
                <div className='form-floating'>
                    <input type='text' className='form-control' id='floatingInput' placeholder='Product Name' name='productName' value={productInfo.productName} onChange={changeHandler} />
                    <label htmlFor='floatingInput'>Product Name</label>
                </div>
                <div className='form-floating'>
                    <input type='number' className='form-control' id='floatingInput' placeholder='Product Price' name='productPrice' value={productInfo.productPrice} onChange={changeHandler} />
                    <label htmlFor='floatingInput'>Product Price</label>
                </div>
                <div className='form-floating'>
                    <select className='form-select' id='floatingSelect' aria-label='Floating label select example' name='productCategory' value={productInfo.productCategory} onChange={changeHandler}>
                        <option value=''>Select Category</option>
                        <option value=''>Category 1</option>
                        <option value=''>Category 2</option>
                        <option value=''>Category 3</option>
                    </select>
                    <label htmlFor='floatingSelect'>Product Category</label>
                </div>
                <div className='form-floating'>
                    <textarea className='form-control' placeholder='Product Description' id='floatingTextarea2' style={{ height: '100px' }} name='productDescription' value={productInfo.productDescription} onChange={changeHandler}></textarea>
                    <label htmlFor='floatingTextarea2'>Product Description</label>
                </div>
                <div className='form-floating'>
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
                </div>
                <button type='submit' className='btn btn-primary'>{submiValue}</button>
            </form>
        </div>
    )
}

export default FormProduct