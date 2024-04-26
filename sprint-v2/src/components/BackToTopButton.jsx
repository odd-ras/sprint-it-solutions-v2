import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

//css
import "./BackToTopButton.css";

//react-scroll
import { animateScroll as scroll } from "react-scroll";

//fa-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 50, smooth: true });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {visible && (
        <Button
          variant="warning"
          className="backtotop-button"
          onClick={scrollToTop}
        >
          {" "}
          <FontAwesomeIcon icon={faCircleUp} />
        </Button>
      )}
    </>
  );
}

export default BackToTopButton;
