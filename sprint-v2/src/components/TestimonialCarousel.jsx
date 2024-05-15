import React, { useState } from "react";
import data from "../../data/data.json";

//css
import "./TestimonialCarousel.css";

//packages
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//bootstrap
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";

//images

//fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState(data.testimonials);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay
        autoPlaySpeed={10000}
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
        {testimonials.map((obj) => (
          <Container key={obj.id} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center col-sm-8 w-100 px-5">
              <Image
                src={obj.profilePhoto}
                fluid
                height="100"
                width="100"
                className="d-inline-block rounded-circle"
              />
              <h3 className="display-5">{obj.userName}</h3>
              <h6 className="display-6">
                <small className="text-body-secondary">{obj.title}</small>
              </h6>
              <div className="blockquote">
                <p className="mb-4">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  <em>{obj.testimonial}</em>
                  <FontAwesomeIcon icon={faQuoteRight} />
                </p>
              </div>
            </div>
          </Container>
        ))}
      </Carousel>
    </>
  );
}

export default TestimonialCarousel;
