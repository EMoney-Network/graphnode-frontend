"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDown } from "react-icons/io";
import CampignCard from "../Cards/CampignCard";
import Image from "next/image";
const data = [
  {
    id: 1,
    name: "Double Cheeseburger",
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    price: "$$$$",
  },
  {
    id: 2,
    name: "Bacon Cheeseburger",
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    price: "$",
  },
  {
    id: 3,
    name: "Mushroom Burger",
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    price: "$$",
  },
  {
    id: 4,
    name: "Loaded Burger",
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    price: "$$$",
  },
  {
    id: 5,
    name: "Feta & Spinnach",
    category: "pizza",
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "$$",
  },
];
type SliderArrowProps = {
  className?: string;
  style?: any;
  onClick?: () => void;
  position?: string;
};
const SliderArrow = (props: SliderArrowProps) => {
  const { className, style, onClick, position } = props;
  const arrowStyle =
    position === "next"
      ? { ...style, right: "-37px", top: "30%", width: "70px" }
      : { ...style, left: "-20px", zIndex: "1", top: "30%", width: "70px" };

  return (
    <div className={className} style={arrowStyle} onClick={onClick}>
      <Image
        src={
          position === "next"
            ? "/images/arrow-right.png"
            : "/images/arrow-left.png"
        }
        width={50}
        height={50}
        className="w-14 h-14"
        alt="arrow"
      ></Image>
    </div>
  );
};
const QuestSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };
  return (
    <div>
      <div className="flex flex-col py-6 gap-5">
        <div className="mx-0 ">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <div className=" mx-2">
                  <CampignCard title="Documenting Tao: Exploring the Fundamentals of tokens and ETH asdcasdcascddca sd" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default QuestSlider;
