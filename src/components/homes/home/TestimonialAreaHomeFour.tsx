"use client";
import { useRef, useEffect } from "react";

import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import PrevArrowHomeFour from "@/svg/arrow_btn/PrevArrowHomeFour";
import NextArrowHomeFour from "@/svg/arrow_btn/NextArrowHomeFour";

import quation from "@/assets/img/shape/quation-4.png";
import tes_shape_1 from "@/assets/img/shape/testimonial-4-shape-1.png";
import theme_forest_img from "@/assets/img/shape/testimonial-4-shape-2.png";
// testimonial images
import test_img_1 from "@/assets/img/team/testimonial-4-shape-1.png";
import test_img_2 from "@/assets/img/team/testimonial-4-shape-2.png";
import test_img_3 from "@/assets/img/team/testimonial-4-shape-3.png";
import test_img_4 from "@/assets/img/team/testimonial-4-shape-4.png";
import test_img_5 from "@/assets/img/team/testimonial-4-shape-5.png";
import test_img_6 from "@/assets/img/team/testimonial-4-shape-6.png";

type test_shape_data = {
  id: number;
  img: StaticImageData;
  data_depth: string;
}[];

// testimonial shape data
const test_shape_data: test_shape_data = [
  { id: 1, img: test_img_1, data_depth: "0.3" },
  { id: 2, img: test_img_2, data_depth: "0.2" },
  { id: 3, img: test_img_3, data_depth: "0.1" },
  { id: 4, img: test_img_4, data_depth: "0.2" },
  { id: 5, img: test_img_5, data_depth: "0.1" },
  { id: 6, img: test_img_6, data_depth: "0.3" },
];

// testimonial content type
interface testimonial_content_type {
  sub_title: string;
  title: string;
  testimonial_data: {
    id: number;
    author: string;
    job_title: string;
    sm_des: JSX.Element;
  }[];
}
// testimonial content
const testimonial_content: testimonial_content_type = {
  sub_title: "Testimonials",
  title: "What Clients Say",
  testimonial_data: [
    {
      id: 1,
      author: "Sara Mitchell",
      job_title: "Principal at Green Valley School",
      sm_des: (
        <>
          "EazyClassroom.Net has transformed our teaching experience. The automatic attendance and seamless class setup make it a breeze to manage virtual sessions. Our teachers are thrilled with the easy access, and students are actively engaging like never before."
        </>
      ),
    },
    {
      id: 2,
      author: "David Roberts",
      job_title: "Director of Digital Learning, Bright Horizons",
      sm_des: (
        <>
          "With EazyClassroom.Net, managing multiple classrooms is effortless. The streamlined monitoring and robust reporting tools have given us incredible insights into student engagement, and the automated recordings ensure nothing gets missed!"
        </>
      ),
    },
    {
      id: 3,
      author: "Maria Lopez",
      job_title: "Educational Technologist",
      sm_des: (
        <>
          "The platform's real-time collaboration tools and interactive rooms have truly enhanced our virtual learning environment. Teachers and students alike enjoy the user-friendly setup, and our parents are delighted with the simplicity of joining and monitoring classes."
        </>
      ),
    },
    {
      id: 4,
      author: "James Whitman",
      job_title: "CEO, Learning Innovations Inc.",
      sm_des: (
        <>
          "EazyClassroom.Net exceeded our expectations. From quick classroom setup to dynamic learning tools, this platform has everything. Our students can revisit recorded sessions whenever needed, making it a valuable resource for ongoing learning."
        </>
      ),
    },
  ],
};

const { sub_title, title, testimonial_data } = testimonial_content;

// slider setting
const setting = {
  fade: false,
  autoplay: false,
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  // prevArrow: $('.prv-testi-case'),
  // nextArrow: $('.next-testi-case'),
  // appendArrows: ".tptestimonal-4-nav",
};
const TestimonialAreaHomeFour = () => {
  const sliderRef = useRef<Slider | null>(null);
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };


  return (
    <>
      <section className="testimonial-area pb-60 scene fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-4-thumb p-relative pb-60">
                <div className="testimonial-4-main-thumb p-relative">
                  <Image src={tes_shape_1} alt="Eazyclassroom" />
                  <div className="testimonial-4-main-anim">
                    <div className="tp-tooltip-circle">
                      <div className="tp-tooltip-effect-1"></div>
                      <div className="tp-tooltip-effect-2"></div>
                      <div className="tp-tooltip-effect-3"></div>
                    </div>
                  </div>
                </div>
                {test_shape_data.map((item, i) =>
                  <div key={i} className={`testimonial-4-shape-${item.id}`}>
                    <Image className="layer" data-depth={item.data_depth} src={item.img} alt="Eazyclassroom" />
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-testimonial-4 pb-60">
                <div className="testimonial-4-wrap mb-40 pl-70">
                  <div className="section-wrapper mb-50">
                    <span>{sub_title}</span>
                    <h5 className="section-title-4 section-title-4-2">
                      {title}
                    </h5>
                  </div>
                  <Slider
                    {...setting}
                    ref={sliderRef}
                    className="testimonial-4-wrapper tptestimonial-4-active"
                  >
                    {testimonial_data.map((test_item, index) => (
                      <div key={index} className="tptestimonial-4-item">
                        <div className="tptestimonial-4-rating d-flex align-items-center mb-25">
                          <div className="tptestimonial-4-rating-img mr-30">
                            
                          </div>
                          <div className="review-star">
                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                          </div>
                        </div>
                        <div className="tptestimonial-4-content d-flex">
                          <div className="tptestimonial-4-icon mr-20">
                            <Image src={quation} alt="Eazyclassroom" />
                          </div>
                          <div className="tptestimonial-4-text">
                            <p>{test_item.sm_des}</p>
                            <div className="tptestimonial-4-author">
                              <h4 className="title">{test_item.author}</h4>
                              <span>{test_item.job_title}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="testimonial-arrow-4 pl-110">
                  <div className="tptestimonal-4-nav p-relative">
                    <button className="prv-testi-case" onClick={handlePrev}>
                      <span>
                        <PrevArrowHomeFour />
                      </span>
                    </button>
                    <button className="next-testi-case" onClick={handleNext}>
                      <span>
                        <NextArrowHomeFour />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeFour;
