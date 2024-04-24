import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook } from 'react-icons/fa';
import './Login.css';
import { config } from '../App';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const data = {
        email: email,
        password: password
    }
    apiCall(data);
    e.preventDefault();
  };

  const apiCall = async (data) => {
    try {
      const response = await axios.post(`${config.url}/login`, data);
      console.log(response);
      if (response.status === 200) {
        enqueueSnackbar("Login successful", { variant: "success" });
        navigate("/");
      } else {
        enqueueSnackbar("Login failed", { variant: "error" });
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("An error occurred", { variant: "error" });
    }
  };

  return (
    <div className="LoginContainer">
      <div className="LeftSection">
        <motion.div
          className="ImageContainer"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <FaBook size={200} color="#e0f2f1" />
        </motion.div>
      </div>
      <div className="RightSection">
        <motion.div
          className="LoginForm"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        >
          <motion.h1
            className="Title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
          >
            Welcome to the EarthPedia
          </motion.h1>
          <form onSubmit={handleSubmit}>
            <input
              className="Input"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
            />
            <input
              className="Input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.8 }}
            />
            <motion.button
              className="Button"
              type="submit"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 1 }}
            >
              Login
            </motion.button>
          </form>
          <motion.p
            className="LinkText"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 1.2 }}
          >
            Don't have an account? <Link className="Link" to="/signup">Sign up</Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;