import { useEffect } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  return (
    <section id="aboutus" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2
          className={`${styles.heading2} text-[30px]`}
          data-aos="fade-down"
          data-aos-delay="600"
        >
          Building Dreams, <br className="sm:block hidden "/>
          Creating Homes.
        </h2>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          data-aos="fade-down"
          data-aos-delay="700"
        >
          Welcome to{" "}
          <span
            className="text-gradient"
            data-aos="fade-down"
            data-aos-delay="800"
          >
            Distinctive Home Improvement LLC
          </span>
          , where we turn dreams into reality. With a passion for quality
          craftsmanship and a commitment to excellence, we specialize in
          creating homes that reflect your unique style and vision.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div
        className={`${layout.sectionImg} flex-col`}
        data-aos="fade-down"
        data-aos-delay="800"
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;