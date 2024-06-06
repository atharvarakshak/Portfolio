import emailIcon from "../assets/images/email-icon.svg";
import phoneIcon from "../assets/images/phone-icon.svg";
import Form  from "./Form";

 function Contact() {
  return (
    <section id="contact" className="mt-40">
      <header className="text-center">
        <h2 className="text-4xl">Contact</h2>
        <p className="text-green-500 font-medium">Ready to get started on your project?</p>
        <p className="text-green-500 font-medium">Contact me now for a Free consultation.</p>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
        <div className="flex items-center justify-center w-full max-w-sm gap-8 bg-green-500 rounded-xl p-6 transition duration-300 hover:bg-pink-500 hover:text-white">
          <a href="mailto:atharvarakshak23@gmail.com">
            <img src={emailIcon} alt="Email" className="w-16" />
          </a>
          <a href="mailto:atharvarakshak23@gmail.com" className="text-black font-medium hover:text-white">
          atharvarakshak23@gmail.com
          </a>
        </div>
        <div className="flex items-center justify-center w-full max-w-sm gap-8 bg-green-500 rounded-xl p-6 transition duration-300 hover:bg-pink-500 hover:text-white">
          <a href="tel:+919960751743">
            <img src={phoneIcon} alt="Phone No" className="w-16" />
          </a>
          <a href="tel:+919960751743" className="text-black font-medium hover:text-white">
            (+91) 9960751743
          </a>
        </div>
      </div>
      <Form />
    </section>
  );
}


export default Contact
