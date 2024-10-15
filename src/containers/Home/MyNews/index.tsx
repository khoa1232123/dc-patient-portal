import { Carousel } from "antd";
import React from "react";
import MyCarousel from "./MyCarousel";

type Props = {};

const MyNews = (props: Props) => {
  return (
    <section className="my-news">
      <div className="wrapper">
        <h2 className="my-news__title">Tin tức sức khoẻ của tôi</h2>
      </div>
      <div className="my-carousel__wrap">
        <MyCarousel />
      </div>
    </section>
  );
};

export default MyNews;
