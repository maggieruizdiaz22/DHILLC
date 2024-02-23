import React, { useEffect, useState } from "react";
import styles from "../style";
import { Button2 } from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { useForm } from "@formspree/react";
import swal from "sweetalert";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xrgnkgqa");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

const handleFormSubmit = async (e) => {
  e.preventDefault();
  await handleSubmit(e);
  if (state.succeeded) {
    // Limpiar los campos del formulario
   setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });

    const successTitle = "Message Sent";
    const successMessage =
      "Thank you for your message. It will be replied to promptly.";
    swal({
      title: successTitle,
      text: successMessage,
      icon: "success",
      button: "Got it",
    });
  }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

      useEffect(() => {
        Aos.init({
          duration: 1800,
          offset: 100,
        });
      }, []);
  return (
    <div>
      <form
        // action="https://formsubmit.co/maggieruizdiaz21@gmail.com"
        // method="POST"
        onSubmit={handleFormSubmit}
      >
        <div
          id="contact"
          className={`${styles.marginY} ${styles.padding} max-w-screen-xl mt-0 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-primary  text-gray-900 rounded-lg shadow-lg`}
        >
          <div
            className="flex flex-col justify-between"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <div>
              <h2 className={`${styles.heading2} text-[40px]`}>
                Lets talk to us!
              </h2>
              <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
                If you have questions, or want to discuss your construction or
                remodeling project, feel free to reach out to us.{" "}
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <label htmlFor="fullName" className={styles.paragraph}>
                Full Name
              </label>
              <input
                name="fullName"
                onChange={handleChange}
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="email" className={styles.paragraph}>
                Email
              </label>
              <input
                name="email"
                onChange={handleChange}
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="phone" className={styles.paragraph}>
                Phone Number
              </label>
              <input
                name="phone"
                onChange={handleChange}
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="111-111-111"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="message" className={styles.paragraph}>
                Message
              </label>
              <textarea
                name="message"
                onChange={handleChange}
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="mt-8">
              <Button2 />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
