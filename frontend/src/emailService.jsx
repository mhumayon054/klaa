// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const CheckoutEmail = () => {
//     const [email, setEmail] = useState(''); // State to hold email input
//     const [name, setName] = useState(''); // State to hold name input
//     const [error, setError] = useState(''); // State to hold error messages

//     const handleBuyNow = () => {
//         // Basic email validation
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(email)) {
//             setError("Please enter a valid email address.");
//             return;
//         }

//         if (!name) {
//             setError("Please enter your name.");
//             return;
//         }

//         const templateParams = {
//             from_name: name, // Sender's name
//             to_name: 'Your Store Name', // You can set a static store name here
//             to_email: email, // Recipient's email
//             message: 'Your message here', // Your message
//         };

//         emailjs.send('service_bh7edjo', '27cf8ic', templateParams, '4b6OiKrMEYQSQbgud')
//             .then((response) => {
//                 console.log('Email sent successfully!', response.status, response.text);
//                 alert("Email sent successfully! Check your inbox.");
//                 setError(''); // Clear error on success
//                 // Optionally clear input fields
//                 setEmail('');
//                 setName('');
//             })
//             .catch((err) => {
//                 console.error('Error sending email:', err);
//                 setError("Error sending email, please try again.");
//             });
//     };

//     return (
//         <div>
//             <h1>Checkout</h1>
//             <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)} // Update state on input change
//                 required
//             />
//             <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} // Update state on input change
//                 required
//             />
//             {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message if exists */}
//             <button onClick={handleBuyNow}>Buy Now</button>
//         </div>
//     );
// };

// export default CheckoutEmail;
