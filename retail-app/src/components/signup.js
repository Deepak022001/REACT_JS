import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Get existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email is already registered
    const userExists = existingUsers.some((user) => user.email === data.email);
    if (userExists) {
      alert('User already exists with this email.');
      return;
    }

    // Save new user to local storage
    existingUsers.push({
      username: data.username,
      email: data.email,
      password: data.password, // In real apps, NEVER store plain passwords
    });

    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Registration successful!');
    navigate('/login'); // Redirect to login
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type='password'
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
