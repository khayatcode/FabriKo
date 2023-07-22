import React from 'react'
import { useEffect } from 'react'
import '../css/Privacy.css'

const Terms = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className='container-fluid d-flex justify-content-center' style={{ padding: '8%' }}>
        <div className='col-10'>
            <h1 className='text-center mb-4' style={{ fontWeight: 300 }}>Terms and Conditions</h1>
            <p style={{ fontWeight: 300 }}>

                Please read these terms and conditions carefully before using our website and making a purchase from Fabriko Suits. By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.
                <br />

                    1. General Information:
                    a. Fabriko Suits is an online store that offers suits and related accessories for sale.
                    b. The use of our website is subject to these terms and conditions, as well as our Privacy Policy.

                <br />
                2. Product Information:
                a. We strive to provide accurate and detailed product information on our website. However, we cannot guarantee the complete accuracy or reliability of such information.
                b. Colors, sizes, and other product specifications may slightly vary from the images displayed on our website.
                c. Prices are subject to change without prior notice.
                <br />
                3. Ordering and Payment:
                a. By placing an order through our website, you are making an offer to purchase the selected products.
                b. We reserve the right to accept or reject any order at our discretion.
                c. Payment must be made in full at the time of placing the order. We accept payment through authorized payment gateways.
                <br />
                4. Shipping and Delivery:
                a. We will make reasonable efforts to ship the products to you within the estimated delivery timeframes mentioned on our website. However, we are not responsible for any delays caused by third-party shipping carriers or unforeseen circumstances.
                b. Shipping fees, customs duties, and taxes (if applicable) will be clearly communicated during the checkout process.
                <br />
                5. Returns and Refunds:
                a. We have a return and refund policy in place. Please refer to our Returns and Refunds Policy for detailed information on the process, eligibility, and conditions for returns and refunds.
                <br />
                6. Intellectual Property:
                a. All content, including text, images, logos, and trademarks, on our website is the intellectual property of Fabriko Suits and protected by applicable copyright and trademark laws.
                b. You may not use, modify, reproduce, distribute, or exploit any content from our website without our prior written consent.
                <br />
                7. Limitation of Liability:
                a. Fabriko Suits shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use our website or products.
                b. We do not assume any responsibility for the accuracy, reliability, or availability of any information or content provided on our website.
                <br />
                8. Governing Law and Jurisdiction:
                a. These terms and conditions shall be governed by and construed in accordance with the laws of Canada.
                b. Any disputes arising from or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts in Canada.
                <br />
                9. Modifications:
                a. We reserve the right to update or modify these terms and conditions at any time without prior notice.
                b. It is your responsibility to review these terms and conditions periodically for any changes.
                <br />
                By using our website and making a purchase, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you have any questions or concerns, please contact our customer support for assistance.
            </p>
        </div>
    </div>
  )
}

export default Terms