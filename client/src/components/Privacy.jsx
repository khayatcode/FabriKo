import React from 'react'
import { useEffect } from 'react'
import '../css/Privacy.css'


export const Privacy = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className='container-fluid d-flex justify-content-center' style={{ padding: '8%'}}>
        <div className='col-10'>
            <h1 className='mb-5' style={{ fontWeight: 300 }}>Privacy Policy</h1>
            <p style={{ fontWeight: 300 }}>
                At Fabriko, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services. By using our website, you consent to the practices described in this policy.
                <br/> 
                1. Information We Collect:
                a. Personal Information: We may collect personal information, such as your name, email address, shipping address, and payment details when you place an order or create an account with us.
                b. Usage Information: We may gather non-personal information about your interactions with our website, including IP address, browser type, device information, and pages visited. This data is collected through cookies and similar technologies.
                c. Communication Information: If you contact us via email or other communication channels, we may retain the content of your messages along with your contact details.
                <br/> 
                2. Use of Collected Information:
                a. Personal Information: We use the personal information you provide to process your orders, communicate with you about your purchases, and deliver our services. We may also use this information to personalize your experience and provide relevant product recommendations.
                b. Usage Information: We utilize usage information to analyze trends, improve our website, and enhance user experience. This information is anonymized and aggregated, and no personally identifiable information is included.
                c. Communication Information: We may use your communication information to respond to your inquiries, provide customer support, and keep records of our interactions with you.
                <br/> 
                3. Data Sharing:
                a. We do not sell, trade, or rent your personal information to third parties without your consent, except as required to fulfill your orders or as legally mandated.
                b. We may share your personal information with trusted service providers who assist us in operating our website, processing payments, and delivering products. These third parties are bound by confidentiality agreements and are only authorized to use the information as necessary to perform their services.
                c. In certain cases, we may be compelled to disclose your information to comply with legal obligations, enforce our policies, or protect the rights, property, or safety of Fabriko or others.
                <br/> 
                4. Data Security:
                a. We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                b. While we strive to maintain the security of your data, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.
                <br/> 
                5. Your Choices and Rights:
                a. You have the right to access, update, or delete your personal information stored with us. You can do so by contacting us directly.
                b. You may choose to opt out of receiving promotional emails from us by following the unsubscribe instructions provided in the email.
                c. Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
                <br/> 
                6. Children's Privacy:
                a. Our website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete it.
                <br/> 
                7. Changes to the Privacy Policy:
                a. We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective upon posting the revised policy on our website.
                <br/> 
                If you have any questions or concerns about our Privacy Policy or the way we handle your personal information, please contact us. We will endeavor to address your queries promptly and responsibly.
                <br/> 
                Last Updated: 2023-06-25.
            </p>
        </div>
    </div>
  )
}
