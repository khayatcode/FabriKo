import React from 'react'
import featured1 from '../images/featured1.jpeg'
import featured2 from '../images/featured2.jpeg'
import featured3 from '../images/featured3.jpeg'
import featured4 from '../images/featured4.jpeg'
import featured5 from '../images/featured5.jpeg'

const Featured = () => {
  return (
    <div className='p-5'>
        <h3>Featured in</h3>
        <div className='row d-flex justify-content-evenly align-items-center p-5'>
            <img src={featured1} alt='featured1' style={{ width: '20%' }} />
            <img src={featured2} alt='featured2' style={{ width: '8%' }} />
            <img src={featured3} alt='featured3' style={{ width: '12%' }} />
            <img src={featured4} alt='featured4' style={{ width: '11%' }} />
            <img src={featured5} alt='featured5' style={{ width: '18%' }} />
        </div>
    </div>
  )
}

export default Featured