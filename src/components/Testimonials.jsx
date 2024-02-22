import { useEffect } from "react";
import { feedback } from "../constants";
import styles from "../style";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
 const settings = {
   accessibility: true,
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 6000,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true,
       },
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 2,
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 };
    useEffect(() => {
      Aos.init({
        duration: 1800,
        offset: 100,
      });
    }, []);
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:mr-[-50%] md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2
          className={`${styles.heading2} text-[30px]`}
          data-aos="fade-down"
          data-aos-delay="600"
        >
          What People are saying about us <br className="sm:block hidden" />
        </h2>
      </div>

      <div className="w-3/4 m-auto">
        <div className="mt-5 ">
          <Slider {...settings}>
            {feedback.map((d) => (
              <div key={d.name} className=" text-white  rounded-xl">
                <div className="h-56 flex justify-center items-center rounded-t-xl ">
                  <img src={d.img} alt="" className="h-44 w-44 object-cover rounded-full" />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
