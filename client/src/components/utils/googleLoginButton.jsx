// components/utils/GoogleLoginButton.jsx
import { FcGoogle } from 'react-icons/fc';

const GoogleLoginButton = ({ label = "Continue with Google" }) => {
  const handleSuccess = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <button
      onClick={handleSuccess}
      className="w-full flex items-center justify-center border border-gray-300 py-2 px-4 rounded mt-6 hover:bg-gray-100 transition"
    >
      <FcGoogle className="mr-2 text-xl" />
      <span className="text-gray-700 font-medium">{label}</span>
    </button>
  );
};

export default GoogleLoginButton;
