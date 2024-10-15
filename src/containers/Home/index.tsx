import React from "react";
import Hero from "./Hero";
import MyNews from "./MyNews";
import MyClinic from "./MyClinic";
import HealthStory from "./HealthStory";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <MyNews />
      <MyClinic />
      <HealthStory />
    </>
  );
};

export default Home;
