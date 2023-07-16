import React from 'react'
import featured1 from '../images/featured1.jpeg'
import featured2 from '../images/featured2.jpeg'
import featured3 from '../images/featured3.jpeg'
import featured4 from '../images/featured4.jpeg'
import featured5 from '../images/featured5.jpeg'
import '../css/Featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <h2 className='text-decoration-underline'>Featured in</h2>
        <div className='row d-flex justify-content-evenly align-items-center p-5 gap-5 imageDiv'>
            <img src={featured1} alt='featured1' className='image-feat'/>
            <img src={featured2} alt='featured2' className='image-feat'/>
            <img src={featured3} alt='featured3' className='image-feat'/>
            <img src={featured4} alt='featured4' className='image-feat'/>
            <img src={featured5} alt='featured5' className='image-feat'/>
        </div>
    </div>
  )
}

export default Featured