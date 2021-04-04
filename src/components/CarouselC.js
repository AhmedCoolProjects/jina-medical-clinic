import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import "../styles/carouselC.scss";
import doctorImg from "../assets/doctor.png";

function Project({ item }) {
  return (
    <Paper className="Project" elevation={0}>
      <div className="carousel_left">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
      <div className="img_carousel_container">
        <img alt="big_image" src={doctorImg} className="big_img_carousel" />
      </div>
    </Paper>
  );
}

const items = [
  {
    name: "First Slide",
    description: "You can choose any image you want to display here.",
  },
  {
    name: "Second Slide",
    description:
      "Also you can add custimized buttons to interact with the user and improve the user experience in your web site.",
  },
  {
    name: "Third Slide ",
    description:
      "You can make your carousel on the autoplay mode or not, also you can choose if you want to activate swiping on the slides to move.",
  },
  {
    name: "Fourth Slide",
    description: "Finaly, you can add as you want of slides .",
  },
];

export default function CarouselC() {
  return (
    <Carousel
      className="SecondExample"
      autoPlay
      animation="slide"
      timeout={600}>
      {items.map((item, index) => {
        return <Project item={item} key={index} />;
      })}
    </Carousel>
  );
}
