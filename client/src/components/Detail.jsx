import React from 'react'
import Jacket from '../images/jacket.jpeg'
import Sew from '../images/sew.jpeg'
import Tape from '../images/tape.jpeg'

const Detail = () => {
  return (
    <div className='row d-flex justify-content-around align-items-center p-5'>
        <div className='col-4'>
            <img src={Jacket} alt='Jacket' style={{ width: '100%' }} />
        </div>
        <div className='col-4'>
            <img src={Sew} alt='Sew' style={{ width: '100%' }} />
        </div>
        <div className='col-4'>
            <img src={Tape} alt='Tape' style={{ width: '100%' }} />
        </div>


    </div>
  )
}

export default Detail