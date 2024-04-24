import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './SignUp.css';
import axios from 'axios';
import { config } from '../App';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from "notistack";

gsap.registerPlugin(ScrollTrigger);

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const formContainerRef = useRef(null);
  const titleRef = useRef(null);
  const inputRefs = useRef([]);
  const imgRef = useRef(null);
  const imgLinerRef = useRef(null);
  const imagePRef = useRef(null);
  const imageHRef = useRef(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const formContainer = formContainerRef.current;
    const title = titleRef.current;
    const inputs = inputRefs.current;
    const image = imgRef.current;
    const imageLiner = imgLinerRef.current;
    const imageP = imagePRef.current;
    const imageH =imageHRef.current;

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: 'img-card',
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: 'image-caption',
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "play pause reverse pause"
      }
    });

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "form-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
      }
    });

    gsap.fromTo(
      formContainer,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
    );

    t3.to(
      formContainer,
      {
        stagger: .1,
        y: 50,
        width: "+=150",
      }
    )

    gsap.fromTo(
      title,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, delay: 0.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      inputs,
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 2, delay: 0.4, ease: "slow(0.7,0.7,false)" }
    );

    gsap.fromTo(
      image,
      { opacity: 0 },
      { opacity: 1, duration: 3 }
    );

    t1.fromTo(
      image,
      {
        opacity: 1,
      }, {
        opacity: 0.1,
        y: -500,
        ease: "power2.out",
      }
    )

    t2.to(
      imageLiner,
      {
        stagger: .5,
        y: "-=50vh",
      }
    ).to(
      imageH, { fontSize: "3rem", fontWeight: "bolder", color: "#bbfff4", duration: 3, ease: "power2.in" }
    ).to(
      imageP, { fontSize: "1.5rem", fontWeight: "bolder", color: "#bbfff4", ease: "power2.in" }
    )

  }, []);

  const handleSubmit = (e) => {
    const data = {
      name,
      email,
      password,
      address
    };
    apiCall(data);
    e.preventDefault();
  };

  const apiCall = async (data) => {
    const response = await axios.post(`${config.url}/signup`, {
      name: data.name,
      email: data.email,
      password: data.password,
      address: data.address,
    });
    if (response.status === 200) {
      enqueueSnackbar("Registration successful", { variant: "success" });
      navigate('/login');
    } else {
      enqueueSnackbar("Registration failed", { variant: "error" });
    }
  };

  return (
    <div className="signup-container">
      <div className="partition">
        <div className="img-card">
          <img className="image-sizing" src="https://supercyberworld.com/public/img/logo.png" alt="earthpedia" ref={imgRef} />
          <div className='card-handler'>
            <div className="image-caption" ref={imgLinerRef}>
              <h2 ref={imageHRef}>Welcome to EarthPedia</h2>
              <p ref={imagePRef}><b>Explore the wonders of our planet</b></p>
            </div>
          </div>
        </div>
        <div className="form-container" ref={formContainerRef}>
          <h1 style={{ color: "#333" }} className="title" ref={titleRef}>
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              ref={(el) => (inputRefs.current[0] = el)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              ref={(el) => (inputRefs.current[1] = el)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              ref={(el) => (inputRefs.current[2] = el)}
            />
            <input
              type="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              ref={(el) => (inputRefs.current[3] = el)}
            />
            <button className='button' type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;