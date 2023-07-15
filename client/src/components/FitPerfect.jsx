import React from 'react'
import { useState, useEffect } from 'react'
import pictureSwitch1 from '../images/pictureSwitch1.png'
import pictureSwitch4 from '../images/pictureSwitch4.png'
import pictureSwitch5 from '../images/pictureSwitch5.png'
import pictureSwitch6 from '../images/pictureSwitch6.png'
import pictureSwitch8 from '../images/pictureSwitch8.png'
import '../css/FitPerfect.css'

const FitPerfect = () => {
    const [currentPicture, setCurrentPicture] = useState(0);
    const pictures = [
        pictureSwitch1,
        pictureSwitch4,
        pictureSwitch5,
        pictureSwitch6,
        pictureSwitch8,
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPicture((currentPicture) => (currentPicture + 1) % pictures.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [pictures.length]);
    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: "#F5F4EF" }}>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="p-5 text-center fitText">
                            <h2>Fit to Perfection Guaranteed</h2>
                            <p className="mt-4">From fabrics and buttons to pocket styles and lining colors, personalize your handcrafted look. Take control and feel confident with our Perfect Fit Guarantee.</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="p-5 fitImg">
                            <img src={pictures[currentPicture]} alt={`pictureSwitch${currentPicture}`} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FitPerfect