import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';  // Ensure animate.css is imported
import atharva from '../assets/images/atharva.jpeg';
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

export function About() {
  return (
    <section id="about" className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      <div className="flex flex-col dark:text-white">
        <ScrollAnimation animateIn="animate__fadeInLeft">
          <h2 className="text-3xl text-green-500 mb-8">About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInLeft" delay={100} duration={1.5}>
          <p className="text-lg font-medium tracking-wide">
            Hi there! I'm Atharva, a website developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInLeft" delay={200} duration={1.5} className="my-8">
          <p className="text-lg font-medium tracking-wide">
            But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress and Shopify, making it easy for my clients to take control of their own websites and keep them up to date.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInLeft" delay={300} duration={1.5}>
          <p className="text-lg font-medium tracking-wide">
            So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInLeft" delay={400} duration={1.5}>
          <h3 className="text-xl text-green-500 mt-8">Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills flex flex-wrap items-center gap-7 mt-6">
          {[
         
            
            { src: reactIcon, alt: 'React', delay: 130 },
            { src: typescriptIcon, alt: 'TypeScript', delay: 140 },
            { src: vueIcon, alt: 'Vue', delay: 150 },
            { src: nodeIcon, alt: 'Node', delay: 160 },
            { src: htmlIcon, alt: 'HTML', delay: 170 },
            { src: cssIcon, alt: 'CSS', delay: 180 },
            { src: boostrapIcon, alt: 'Bootstrap', delay: 190 },
            { src: jsIcon, alt: 'JavaScript', delay: 200 }
          ].map((skill, index) => (
            <div className="hability flex flex-col items-center" key={index}>
              <ScrollAnimation animateIn="animate__fadeInUp" delay={skill.delay} duration={1.5}>
                <img src={skill.src} alt={skill.alt} className="w-14" />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image text-center">
        <ScrollAnimation animateIn="animate__flipInY" animateOut="animate__flipOutY">
          <img src={atharva} alt="atharva" className="mt-8 w-1/4 md:w-3/4 mx-auto transition-filter hover:filter-none rounded-full" />
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default About;
