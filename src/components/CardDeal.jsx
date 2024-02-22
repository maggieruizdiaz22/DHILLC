import { useEffect } from "react";
import {
  Basement,
  diningRoom2,
  diningRoom3,
  bathroom5,
  bathroom6,
  maderas,
  casaporfuera,
  bathroom3,
} from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Carrousel from "./Carrousel";
import Aos from "aos";
import "aos/dist/aos.css";


const slides = [
  Basement,
  bathroom3,
  diningRoom2,
  diningRoom3,
  bathroom5,
  bathroom6,
  maderas,
  casaporfuera,
];

const CardDeal = () => {
    useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
    }, []);
  return (
    <section id="ourwork" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2
          className={`${styles.heading2} text-[30px]`}
          data-aos="fade-down"
          data-aos-delay="600"
        >
          Completed Projects <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          data-aos="fade-down"
          data-aos-delay="700"
        >
          Discover the excellence and craftsmanship that define our completed
          construction projects. We take pride in delivering high-quality homes
          that exceed expectations.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <Carrousel data-aos="fade-down" data-aos-delay="800">
        {slides.map((s, index) => (
          <img
            key={index}
            className="md:h-[100%] md:w-[100%] h-[500px] object-cover w-full"
            src={s}
          />
        ))}
      </Carrousel>

      {/* <div className={layout.sectionImg}>
      <img src={casa1} alt="billing" className="w-[100%] h-[100%]" />
    </div> */}
    </section>
  );
  };
export default CardDeal;
