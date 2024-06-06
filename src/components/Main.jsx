import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import About from "./About.jsx";
import Contact from "./Contact";
import Project from "./Project";
import wordpress from "../assets/images/wordpress.svg";
import shopify from "../assets/images/shopify.svg";
import htmlIcon from "../assets/images/html-icon.svg";
import cssIcon from "../assets/images/css-icon.svg";
import sassIcon from "../assets/images/sass-icon.svg";
import jsIcon from "../assets/images/js-icon.svg";
import nodeIcon from "../assets/images/node-icon.svg";
import reactIcon from "../assets/images/react-icon.svg";
import typescriptIcon from "../assets/images/wordpress.svg";
import vueIcon from "../assets/images/vue-icon.svg";
import boostrapIcon from "../assets/images/bootstrap-icon.svg";

const Main = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: 1 },
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'bubble', parallax: { enable: false, force: 60, smooth: 10 } },
        resize: true,
      },
      modes: {
        bubble: { distance: 400, duration: 2, opacity: 0.8, size: 2 },
        connect: { distance: 80, lineLinked: { opacity: 0.5 }, radius: 60 },
        grab: { distance: 400, lineLinked: { opacity: 1 } },
        push: { quantity: 2 },
        remove: { quantity: 2 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#ffffff' },
      lineLinked: { color: '#000', distance: 150, enable: false, opacity: 0.4, width: 1 },
      move: { direction: 'none', enable: true, outMode: 'out', speed: 2 },
      number: { density: { enable: true, area: 800 }, limit: 20, value: 15 },
      opacity: { animation: { enable: true, minimumValue: 0.2, speed: 1 }, random: true, value: 1 },
      rotate: { animation: { enable: true, speed: 5 }, direction: 'random', random: true, value: 0 },
      shape: {
        type: 'image',
        image: [
          { src: boostrapIcon, width: 20, height: 20 },
          { src: cssIcon, width: 20, height: 20 },
          { src: wordpress, width: 20, height: 20 },
          { src: shopify, width: 20, height: 20 },
          { src: htmlIcon, width: 20, height: 20 },
          { src: jsIcon, width: 20, height: 20 },
          { src: nodeIcon, width: 20, height: 20 },
          { src: reactIcon, width: 20, height: 20 },
          { src: sassIcon, width: 20, height: 20 },
          { src: typescriptIcon, width: 20, height: 20 },
          { src: vueIcon, width: 20, height: 20 },
        ],
      },
      size: { value: 16 },
    },
  };

  return (
    <div className="relative z-0 overflow-x-hidden">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10 p-10 md:p-20 dark:bg-gray-900">
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
