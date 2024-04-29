import React, { useState, useRef, useEffect } from 'react';
import { FaBell, FaMoon, FaBars } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './Header.css';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const DropdownMenu = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: '120vw' },
        { x: '82vw', duration: 0.5, ease: 'power2.out' }
      );
    } else {
      gsap.to(menuRef.current, { x: '120vw', duration: 0.5, ease: 'power2.out' });
    }
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }

  return (
    <div
      ref={menuRef}
      className="dropdown-menu"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '200px',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        transform: 'translateX(-100%)',
      }}
    >
      <ul>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ padding: '10px 0', cursor: 'pointer' }}><Link to='/login'>Login</Link></li>
        <li style={{ padding: '10px 0', cursor: 'pointer' }}><Link to='/signup'>Signup</Link></li>
        <li style={{ padding: '10px 0', cursor: 'pointer' }}><Link to='/setting'>Settings</Link></li>
      </ul>
      </ul>
      <button onClick={toggle}>{'< Back to'}</button>
    </div>
  );
};

export default function Header() {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const searchBarRef = useRef(null);
  const iconContainerRef = useRef(null);
  const contentRef = useRef(null);
  const postInputRef = useRef(null);
  const createPostBtnRef = useRef(null);
  const addImagesBtnRef = useRef(null);
  const [isActiveNotification, setIsActiveNotification] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;
    const searchBar = searchBarRef.current;
    const iconContainer = iconContainerRef.current;
    const content = contentRef.current;
    const postInput = postInputRef.current;
    const createPostBtn = createPostBtnRef.current;
    const addImagesBtn = addImagesBtnRef.current;

    gsap.fromTo(
      navbar,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
    );
    gsap.fromTo(
      logo,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.7 }
    );
    gsap.fromTo(
      searchBar,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.9 }
    );
    gsap.fromTo(
      iconContainer,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1.1 }
    );
    gsap.fromTo(
      content,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.3 }
    );
    gsap.fromTo(
      postInput,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1.5 }
    );
    gsap.fromTo(
      createPostBtn,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.7 }
    );
    gsap.fromTo(
      addImagesBtn,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.9 }
    );
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav ref={navbarRef}>
        <div ref={logoRef}>
          <span className="logo" style={{ fontWeight: 'bold' }}>
            E
          </span>
          <span className="logo" style={{ fontWeight: 'normal' }}>
            arth
          </span>
          <span className="logo" style={{ fontWeight: 'bold' }}>
            P
          </span>
          <span className="logo" style={{ fontWeight: 'normal' }}>
            edia
          </span>
        </div>
        <div ref={searchBarRef}>
          <input type="text" placeholder="Search..." />
        </div>
        <div ref={iconContainerRef} className="navbar-leftSide">
          {isActiveNotification ? (
            <FaBell style={{ color: 'red' }} />
          ) : (
            <FaBell />
          )}
          <FaMoon />
          <a className="dropdown" onClick={toggleDropdown}>
            <FaBars />
          </a>
        </div>
      </nav>
      <div ref={contentRef} className='t'>
        <div className='t10'>
            <div className='heading'>
                <h3>Recent Activities</h3>
            </div>
        </div>
        <div className='t11'>
            <div className='textarea1'>
            <textarea
                ref={postInputRef}
                placeholder="What's on your mind?"
                className='textarea'
            ></textarea>
            </div>
            <div>
                <button ref={createPostBtnRef} className='b1'>Create Post</button>
                <button ref={addImagesBtnRef} className='b1'>Add Images</button>
            </div>
        </div>
      </div>
      <DropdownMenu isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen} />
    </div>
  );
}