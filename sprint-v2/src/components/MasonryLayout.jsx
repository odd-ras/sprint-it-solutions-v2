import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

//css
import "./MasonryLayout.css";

//packages
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//images
import footballPic from "../assets/images/football-pic.png";
import cyberSecurity from "../assets/images/cyber-security.jpg";
import databaseAdministration from "../assets/images/database-administration.jpg";
import databaseManagement from "../assets/images/database-management.jpg";
import itSupport from "../assets/images/it-support.png";
import networkDesign from "../assets/images/network-design.jpg";
import serverManagement from "../assets/images/server-management.jpg";
import softwareDev from "../assets/images/software-dev.jpg";

function MasonryLayout() {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className="mb-5 masonsry-container">
          <div className="text-center col-2-style masonry-item">
            <Image src={cyberSecurity} className="col-image bg-light" />
          </div>
          <div className="text-center col-1-style masonry-item">
            <Image
              src={databaseAdministration}
              className="col-image  bg-light"
            />
          </div>
          <div className="text-center col-2-style masonry-item">
            <Image src={databaseManagement} className="col-image bg-light" />
          </div>
          <div className="text-center col-1-style masonry-item">
            <Image src={itSupport} className="col-image bg-light" />
          </div>
          <div className="text-center col-1-style masonry-item">
            <Image src={networkDesign} className="col-image bg-light" />
          </div>
          <div className="text-center col-2-style masonry-item">
            <Image src={serverManagement} className="col-image bg-light" />
          </div>
          <div className="text-center col-1-style masonry-item">
            <Image src={softwareDev} className="col-image bg-light" />
          </div>
          <div className="text-center col-2-style masonry-item">
            <Image src={serverManagement} className="col-image bg-light" />
          </div>
          <div className="text-center col-1-style masonry-item">
            <Image src={itSupport} className="col-image bg-light" />
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}

export default MasonryLayout;
