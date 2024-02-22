import styles from "../style";
import { casaPrincipal, prueba2 } from "../assets";
import GetStarted from "./GetStarted";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
      Aos.init({
        duration: 1800,
        offset: 100,
      });
    }, []);
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* <div
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount On{" "}
            <span className="text-white">The second </span> Bathroom
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-poppins font-semibold ss:text-[70px] text-[25px] ml-10 text-white ss:leading-[100.8px] mt-[-30px] "
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Welcome to <span className="text-gradient">Distinctive</span> <br />
            <span className="">Home Improvement</span> <br className="sm:block hidden" />
            <span className="text-gradient">LLC</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1> */}
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}
          data-aos="fade-down"
          data-aos-delay="700"
        >
          We are specializes in turning your house into the home you've always
          envisioned. Our team offers top-notch remodeling services, from
          kitchens to complete home renovations. Let us bring your dream home to
          life with precision and care. Start your home transformation with us
          today.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={prueba2}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] md:mr-20"
          data-aos="fade-down"
          data-aos-delay="800"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
