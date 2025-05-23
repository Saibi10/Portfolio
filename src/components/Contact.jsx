import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Add hidden fields for recipient email
    formRef.current.querySelector('input[name="to_email"]').value = "sohaib.aslam2467@gmail.com";
    formRef.current.querySelector('input[name="to_name"]').value = "Sohaib Aslam";

    // Get environment variables or use fallback values
    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || 'service_id';
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || 'template_id';
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || 'public_key';

    // Using emailjs.sendForm which is more reliable for form submissions
    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      .then(
        (result) => {
          setLoading(false);
          console.log("Email sent successfully:", result.text);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error.text);
          alert("Something went wrong. Please try again or contact directly at sohaib.aslam2467@gmail.com");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* Hidden fields for recipient information */}
          <input type="hidden" name="to_email" />
          <input type="hidden" name="to_name" />

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='from_name'
              value={form.from_name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='from_email'
              value={form.from_email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
