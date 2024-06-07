import React, { useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Application } from '@splinetool/runtime';
import 'animate.css/animate.min.css';
import Illustration from "../assets/images/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../assets/images/linkedin.svg';
import githubIcon from '../assets/images/github.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import Hello from '../assets/images/Hello.gif';
import telegram from '../assets/images/telegram.svg';
import Type from './Type';

export function Hero() {

  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/Rh05bwmffWv5jmWc/scene.splinecode');
  }, []);

  return (
    <div id="home" className="flex items-center justify-evenly p-8 md:p-20 h-screen">
      <div className='wrapper h-screen w-auto absolute top-0 left-0 right-0 opacity-100 z-0 p-4'>
      </div>
      <div className="hero-text max-h-screen w-full md:w-[50%] p-8 relative z-10 mt-8 text-left">
        <ScrollAnimation animateIn="animate__fadeInUp" delay={200}>
          <p className="flex text-[1.2rem] md:text-[1.8rem] w-full"> Hello  &nbsp;&nbsp;<img src={Hello} alt="Hello" className='w-8' />, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" delay={600}>
          <h1 className="text-4xl md:text-[3.5rem] text-white dark:text-gray-800 font-customFont mt-4">Atharva Rakshak</h1>
        </ScrollAnimation>
        <div className="text-xl md:text-3xl lg:text-4xl mt-4">
          <Type />
        </div>

        <button className='rounded-2xl border-2 border-white p-2 mt-4 dark:border-gray-800 text-white bg-green-500'>
          Contact
        </button>
        <ScrollAnimation animateIn='animate__flipInX' >
          <div className="social-media items-center flex justify-start gap-4 mt-4">
            <a href="https://www.linkedin.com/in/atharva-rakshak-b53025257/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" className="w-12" />
            </a>
            <a href="https://github.com/atharvarakshak" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" className="w-12" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" className="w-12" />
            </a>
            <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" className="w-12" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image relative z-10 h-screen w-[50%] ml-4 hidden md:inline-block">
        <canvas id='canvas3d' className='h-full w-full'></canvas>
      </div>
    </div>
  );
}

export default Hero;
