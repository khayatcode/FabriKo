import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Pants1 from '../images/pants1.webp'
import Pants2 from '../images/pants2.webp'
import Pants3 from '../images/pants3.webp'
import Pants4 from '../images/pants4.webp'
import Pants5 from '../images/pants5.webp'
import Pants6 from '../images/pants6.webp'


const BottomCategory = () => {
  return (
    <div style={{ padding: '13%' }}>
      <div className='fixed-top bg-white' style={{ zIndex: 1, paddingTop: '8%' }}>
        <h1 className='mb-4' style={{ fontWeight: 300 }}>Bottomwear Category</h1>
      </div>
      <div >
        <div className="row p-3">
          <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
            <Link to="/product/8">
              <img src={Pants1} alt="Pants1" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }} />
            </Link>
            <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
              <p className='text-start text-muted' style={{ fontSize: '15px' }}>Premium Black Pure wool flat-front Slacks</p>
              <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$239USD</p>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
            <Link to="/product/9">
              <img src={Pants2} alt="Pants2" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }} />
            </Link>
            <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
              <p className='text-start text-muted' style={{ fontSize: '15px' }}>Navy Blue Wool Blends flat-front Slacks</p>
              <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$99USD</p>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
            <Link to="/product/10">
              <img src={Pants3} alt="Pants3" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }} />
            </Link>
            <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
              <p className='text-start text-muted' style={{ fontSize: '15px' }}>Premium Slim Fit Dark Beige Pure wool flat-front Dress Pants</p>
              <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$129USD</p>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
            <Link to="/product/11">
              <img src={Pants4} alt="Pants4" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }} />
            </Link>
            <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
              <p className='text-start text-muted' style={{ fontSize: '15px' }}>Blue Checkered Tweed flat-front Trousers</p>
              <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$139USD</p>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
            <Link to="/product/12">
              <img src={Pants5} alt="Pants5" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }} />
            </Link>
            <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
              <p className='text-start text-muted' style={{ fontSize: '15px' }}>Tweed pants - Checkered brown</p>
              <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$169USD</p>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
            <Link to="/product/13">
              <img src={Pants6} alt="Pants6" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }} />
            </Link>
            <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
              <p className='text-start text-muted' style={{ fontSize: '15px' }}>Grey Tweed Pants</p>
              <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$119USD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomCategory