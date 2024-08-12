import React from "react";

//css
import "./MultiCarousel.css";

import microsoftLogo from "../assets/images/mic-logo.png";
import mikrotikLogo from "../assets/images/reseller.png";
import ciscoLogo from "../assets/images/cisco2.png";
import linuxLogo from "../assets/images/linux-22617.png";
import mysqlLogo from "../assets/images/mysql.png";
import ubiquityLogo from "../assets/images/ubiquity.png";

//packages
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//bootstrap
import Image from "react-bootstrap/Image";

function MultiCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay
        autoPlaySpeed={1000}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div>
          <Image
            src={ubiquityLogo}
            width="100"
            height="60"
            className="d-inline-block my-3"
          />
        </div>
        <div>
          <Image
            src={mikrotikLogo}
            width="100"
            height="60"
            className="d-inline-block my-3"
          />
        </div>
        <div>
          <Image
            src={ciscoLogo}
            width="100"
            height="60"
            className="d-inline-block my-3"
          />
        </div>
        <div>
          <Image
            src={linuxLogo}
            width="100"
            height="60"
            className="d-inline-block my-3"
          />
        </div>
        <div>
          <Image
            src={mysqlLogo}
            width="100"
            height="60"
            className="d-inline-block my-3"
          />
        </div>
        <div>
          <Image
            src={microsoftLogo}
            width="100"
            height="60"
            className="d-inline-block my-3"
          />
        </div>
      </Carousel>
    </>
  );
}

export default MultiCarousel;
