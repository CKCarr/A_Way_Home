// src/components/Auth/Register.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  IconButton,
} from '../MTailwind';
import { registerUser } from '../api/auth';
import EyeOpen from '../../assets/EyeOpen';
import EyeClosed from '../../assets/EyeClosed';

interface RegisterProps {
  // eslint-disable-next-line no-unused-vars
  setActiveTab: (tab: 'login' | 'register') => void;
}

const Register: React.FC<RegisterProps> = ({ setActiveTab }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      alert('Passwords do not match');
      return;
    }
    try {
      const data = await registerUser(username, email, password);
      console.log('User registered:', data);
      router.push('/login');
    } catch (error) {
      console.error('Error signing up:', error);
      alert(error.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister} className=" w-full max-w-md mx-auto">
      <Card
        className="bg-mid-gray text-dark-text border-2 hover:border-bright-teal"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          color="blue-gray"
          className="mb-4 grid h-28 place-items-center
          bg-light-gray border-4 border-primary-green"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            variant="h3"
            color="blue-gray"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Register
          </Typography>
        </CardHeader>
        <CardBody
          className="flex flex-col gap-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Input
            label="Username"
            size="lg"
            className="hover:bg-light-gray-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <Input
            label="Email"
            size="lg"
            className="hover:bg-light-gray-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <div className="relative">
            <Input
              label="Password"
              size="lg"
              className="hover:bg-light-gray-2"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <IconButton
              variant="text"
              className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {showPassword ? <EyeOpen /> : <EyeClosed />}
            </IconButton>
          </div>
          <div className="relative">
            <Input
              label="Confirm Password"
              size="lg"
              className="hover:bg-light-gray-2"
              type={showPasswordCheck ? 'text' : 'password'}
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <IconButton
              variant="text"
              className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-600"
              onClick={() => setShowPasswordCheck(!showPasswordCheck)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {showPasswordCheck ? <EyeOpen /> : <EyeClosed />}
            </IconButton>
          </div>
          <div className="-ml-2.5">
            <Checkbox
              label="Remember Me"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
        </CardBody>
        <CardFooter
          className="pt-0"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Button
            variant="text"
            className="text-white bg-primary-green border-2 border-primary-blue hover:border-2 hover:border-primary-blue hover:bg-bright-teal hover:text-primary-blue"
            fullWidth
            type="submit"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Sign Up
          </Button>
          <Typography
            variant="small"
            className="mt-6 flex justify-center"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Already have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
              onClick={() => setActiveTab('login')}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Sign In
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Register;
