import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../Images/banner1.jpg";
import banner2 from "../../Images/banner2.jpg";
import banner3 from "../../Images/banner3.jpg";
import BannerForm from "../BannerForm/BannerForm";
const Banner = () => {
  return (
    <div className="pt-5 pt-lg-0">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="d-lg-flex align-items-center justify-content-center h-100 ">
            <h3 className="textSize text-wrap py-5 py-lg-0">
              Welcome to GoTravel
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="d-lg-flex align-items-center justify-content-center h-100">
            <h3 className="textSize text-wrap py-5 py-lg-0">
              Find Next Place To Visit
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="d-lg-flex align-items-center justify-content-center h-100">
            <h3 className="textSize text-wrap py-5 py-lg-0">
              Get Ready To Travel The World
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <BannerForm></BannerForm>
    </div>
  );
};

export default Banner;
