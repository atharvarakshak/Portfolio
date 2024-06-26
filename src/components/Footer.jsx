import React from 'react'
import reactIcon from '../assets/images/react-icon.svg'
import linkedin from '../assets/images/linkedin.svg'
import githubIcon from '../assets/images/github.svg'
import whatsapp from '../assets/images/whatsapp.svg'
import telegram from '../assets/images/telegram.svg'
import instagramIcon from '../assets/images/instagram.svg'

function Footer() {
  return (
    <div className="bg-gray-800 py-4 px-8 flex items-center md:justify-between flex-wrap text-white  w-full justify-center relative z-50 ">
      <a href="https://atharvarakshak.vercel.app/" className="text-lg md:text-2xl font-bold ">
        <span>https://atharvarakshak.vercel.app/</span>
        {/* <span>singh.in</span> */}
      </a>
      <div>
        <p className="tracking-wide flex items-center gap-2 text-md md:text-2xl ">
          This Website was made with 
          <img src={reactIcon} alt="React" className="w-8 animate-spin" style={{ animationDuration: '5s' }} />
          {/* <span>❤️</span> */}
        </p>
      </div>
      
      <div className="flex items-center gap-6 mt-2 ">
        <a
          href="https://www.linkedin.com/in/atharva-rakshak-b53025257/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" className="w-8" />
        </a>
        <a
          href="https://github.com/atharvarakshak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="w-8" />
        </a>
        <a
          href="https://wa.me/qr/MY4AJ4KMDSD2L1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" className="w-8" />
        </a>
        <a
          href="https://t.me/CodeVinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" className="w-8" />
        </a>
        <a
          href="https://www.instagram.com/atharvarakshak?igsh=MWEyN29hM3ZyZ3Nmbg=="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="w-8" />
        </a>
      </div>
    </div>
  )
}

export default Footer
