import { BrowserRouter } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../assets/images/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../assets/images/linkedin.svg';
import githubIcon from '../assets/images/github.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import Hello from '../assets/images/Hello.gif';
import telegram from '../assets/images/telegram.svg';

export function Hero() {
  return (
    <div id="home" className="flex justify-evenly p-10 md:p-40 border-2 border-white h-screen">
      <div className="hero-text border-2 border-white max-h-screen p-8">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="text-[1rem] md:text-[1.8rem]">Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1 className="text-[4rem] md:text-[7rem]">Atharva Rakshak</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={600}>
          <p className="small-resume">4 Years of Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={800}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1000}>
          <div className="social-media flex justify-center gap-4 mt-4">
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
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <img src={Illustration} alt="Ilustração" className="w-96" />
        </ScrollAnimation>
      </div>
    </div>
  );
}
