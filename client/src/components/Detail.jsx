import React from 'react'
import Jacket from '../images/jacket.jpeg'
import Sew from '../images/sew.jpeg'
import Tape from '../images/tape.jpeg'

const Detail = () => {
  return (
    <div className='row d-flex justify-content-around align-items-center p-5' style={{ backgroundColor: "#F5F4EF" }}>
        <div className='col-4'>
            <img src={Jacket} alt='Jacket' style={{ width: '100px' }} />
            <div>
                <h3 style={{ fontWeight: 400, color: "#212727" }}>The Perfect Fit</h3>
                <p className='mt-4' style={{ fontWeight: 300, color: "#212727" }}>Made to measure by expert tailors.</p>
            </div>
        </div>
        <div className='col-4'>
            <img src={Sew} alt='Sew' style={{ width: '100%' }} />
            <div>
                <h3 style={{ fontWeight: 400, color: "#212727" }}>Quality Craftsmanship</h3>
                <p className='mt-4' style={{ fontWeight: 300, color: "#212727" }}>Handmade with the finest materials.</p>
            </div>
        </div>
        <div className='col-4'>
            <img src={Tape} alt='Tape' style={{ width: '100%' }} />
            <div>
                <h3 style={{ fontWeight: 400, color: "#212727" }}>Personalized Service</h3>
                <p className='mt-4' style={{ fontWeight: 300, color: "#212727" }}>A dedicated stylist at your service.</p>
            </div>
        </div>
    </div>
  )
}

export default Detail