"use client";

import Slider from "react-slick";
import CampignCard from "../Cards/CampignCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function QuestSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: true,
  };
  return (
    <div className="w-full px-4">
      <Slider {...settings}>
        <div>
          <CampignCard title="Documenting Tao: Exploring the Fundamentals of tokens and ETH asdcasdcascddca sd" />
        </div>
        <div>
          <CampignCard title="Documenting Tao: Exploring the Fundamentals of tokens and ETH asdcasdcascddca sd" />
        </div>
        <div>
          <CampignCard title="Documenting Tao: Exploring the Fundamentals of tokens and ETH asdcasdcascddca sd" />
        </div>
        <div>
          <CampignCard title="Documenting Tao: Exploring the Fundamentals of tokens and ETH asdcasdcascddca sd" />
        </div>
        <div>
          <CampignCard title="Documenting Tao: Exploring the Fundamentals of tokens and ETH asdcasdcascddca sd" />
        </div>
        <div>
          <CampignCard title="Documenting Tao: Exploring the Fundamentals of tokens and ETH asdcasdcascddca sd" />
        </div>
      </Slider>
    </div>
  );
}

export default QuestSlider;
