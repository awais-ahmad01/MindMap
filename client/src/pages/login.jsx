
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signinUser } from "../store/actions/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import GoogleLoginButton from "../components/utils/googleLoginButton";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboardPanel");
    }
  }, [isAuthenticated, navigate]);

  const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(signinUser(data))
      .unwrap()
      .then(() => {
        console.log("Login successful");
        navigate("/dashboardPanel"); 
      });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const inputVariants = {
    rest: { scale: 1, borderColor: "#d1d5db" },
    focus: {
      scale: 1.02,
      borderColor: "#4f46e5",
      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.1)",
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -2,
      transition: { duration: 0.2, type: "spring", stiffness: 400 }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-indigo-200 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="bg-white/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut"
          }}
        />

        <motion.h2 
          className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Login
        </motion.h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.label 
              className="block text-sm font-medium mb-2 text-gray-700" 
              htmlFor="email"
              variants={itemVariants}
            >
              Email
            </motion.label>
            <motion.input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-0 transition-all duration-200"
              {...register("email")}
              variants={inputVariants}
              initial="rest"
              whileFocus="focus"
            />
            {errors.email && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.email.message}
              </motion.p>
            )}
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <motion.label 
              className="block text-sm font-medium mb-2 text-gray-700" 
              htmlFor="password"
              variants={itemVariants}
            >
              Password
            </motion.label>
            <motion.input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-0 transition-all duration-200"
              {...register("password")}
              variants={inputVariants}
              initial="rest"
              whileFocus="focus"
            />
            {errors.password && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.password.message}
              </motion.p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{
                x: "200%",
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
            />
            <span className="relative z-10">Login</span>
          </motion.button>
        </form>

        <motion.div className="mt-6" variants={itemVariants}>
          <GoogleLoginButton label="Sign in with Google" />
        </motion.div>

        <motion.p 
          className="text-center text-sm mt-6 text-gray-600"
          variants={itemVariants}
        >
          Don&apos;t have an account?{" "}
          <Link 
            to="/register" 
            className="text-indigo-600 hover:text-purple-600 font-medium hover:underline transition-colors duration-200"
          >
            Register
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;