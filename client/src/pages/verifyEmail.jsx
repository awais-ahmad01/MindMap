import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Loader } from '@mantine/core';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const VerifyEmail = () => {

    const [searchParams] = useSearchParams();
const token = searchParams.get("token");
const email = searchParams.get("email");

  const [message, setMessage] = useState("Verifying your email...");
  const [isVerified, setIsVerified] = useState(null); 
  const [loading, setLoading] = useState(null);


  useEffect(() => {
    if (token) {
        setLoading(true);
      axios
        .get(`${baseURL}/verifyEmail?token=${token}`)
        .then(() => {
             setLoading(false);
          setMessage("✅ Your email has been verified successfully!");
          setIsVerified(true);
         
        })
        .catch(() => {
            setLoading(false);
          setMessage("❌ Verification failed. The link may be invalid or expired.");
          setIsVerified(false);
          
        });
    } else {
        setLoading(false);
      setMessage("❌ No token provided in the link.");
      setIsVerified(false);
      
    }
  }, [token]);



  const handleResend = () => {
  axios.post(`${baseURL}/resendVerification`, { email })
    .then(res => {
      alert("Verification email resent!");
    })
    .catch(err => {
      alert("Failed to resend. Reason: " + err.response?.data?.message || err.message);
    });
};


if(loading){
    return (
        <div className='flex items-center justify-center h-screen'>
            <Loader/>
        </div>
    )
}



  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg text-center w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Email Verification</h2>
        <p className="mb-6 text-gray-700">{message}</p>

        {(isVerified == true) && (
  <Link to="/login">
    <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700">Go to Login</button>
  </Link>
)}

{(isVerified == false) && (
    <button
    onClick={handleResend}
    className="bg-yellow-500 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-600"
  >
    Resend Verification Email
  </button>
)

}

      </div>
    </div>
  );
};

export default VerifyEmail;
