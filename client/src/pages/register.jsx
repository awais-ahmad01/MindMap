import {useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/actions/auth';
import GoogleLoginButton from '../components/utils/googleLoginButton';




const Register = () => {

  const dispatch = useDispatch();


  const schema = yup.object({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  })



  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    }
  });

  

  const onSubmit = (data) => {
    console.log(data);  
    dispatch(registerUser(data))
    .unwrap()
    .then(() => {
      console.log('Registration successful');
      // Optionally redirect or show a success message
    })
    .catch((error) => { 
      console.error('Registration failed:', error);
      // Optionally show an error message
    });


  }



    
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>
            <input type="text" id="username" className="w-full p-2 border border-gray-300 rounded" 
              {...register('username')}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" 
              {...register('email')}
            
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" 
              {...register('password')}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">Register</button>
        </form>

        <div>
        <GoogleLoginButton label="Register with Google"/>
      </div>
      </div>

      
    </div>
  );
}


export default Register;