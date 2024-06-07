import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useState } from 'react';
import validator from 'validator';

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry');
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState('');

  function verifyEmail(email) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div className="mt-40 text-center">
        <h3>Thanks for getting in touch!</h3>
        <button
          className="mt-3 p-2 rounded-md uppercase text-white bg-blue-600 hover:bg-blue-700"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="mt-12 grid place-items-center border-2 border-black dark:border-white">
      <h2 className="text-center mb-8 dark:text-white">Get in touch using the form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full p-6">
        <input
          className="w-full max-w-4xl p-4 rounded-md border border-black dark:border-white bg-transparent text-white font-semibold placeholder-white focus:outline-none"
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
        <textarea
          className="w-full max-w-4xl p-4 rounded-md border  border-black dark:border-white bg-transparent text-white  font-semibold placeholder-white focus:outline-none h-80 resize-none"
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        {/* <ValidationError prefix="Message" field="message" errors={state.errors} />
        <ReCAPTCHA
          sitekey="6Lfj9NYfAAAAAP8wPLtzrsSZeACIcGgwuEIRvbSg"
          onChange={() => {
            setIsHuman(true);
          }}
        /> */}
        <button
          className="p-4 px-24 rounded-md bg-blue-600 text-white uppercase hover:bg-blue-700 disabled:opacity-50"
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
export default Form;