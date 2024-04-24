import React, { useState, useRef, useEffect } from 'react';
import { FaBell, FaMoon, FaBars } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './HomePage.css';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const searchBarRef = useRef(null);
  const iconContainerRef = useRef(null);
  const contentRef = useRef(null);
  const postInputRef = useRef(null);
  const createPostBtnRef = useRef(null);
  const addImagesBtnRef = useRef(null);
  const [isActiveNotification, setIsActiveNotification] = useState(false);

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
        <div ref={iconContainerRef} className='navbar-leftSide'>
          {isActiveNotification ? (
            <FaBell style={{ color: 'red' }} />
          ) : (
            <FaBell />
          )}
          <FaMoon />
          <FaBars />
        </div>
      </nav>
      <div ref={contentRef}>
        <div>
          <textarea ref={postInputRef} placeholder="What's on your mind?"></textarea>
        </div>
        <div>
          <button ref={createPostBtnRef}>Create Post</button>
          <button ref={addImagesBtnRef}>Add Images</button>
        </div>
        {/* Add more */}
      </div>
    </div>
  );
}