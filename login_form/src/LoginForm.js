import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('User Logged In:', data);
    alert('Login Successful!');
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-6 rounded shadow-md w-80'
      >
        <h2 className='text-xl font-bold mb-4'>Login</h2>
        <div className='mb-4'>
          <label className='block mb-1'>Email</label>
          <input
            type='email'
            {...register('email')}
            className='w-full p-2 border rounded'
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='block mb-1'>Password</label>
          <input
            type='password'
            {...register('password')}
            className='w-full p-2 border rounded'
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password.message}</p>
          )}
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
