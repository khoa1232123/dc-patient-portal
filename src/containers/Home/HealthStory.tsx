import { ArrowFromRightIcon } from "@/assets/svg";
import { dataHealthStories } from "@/constants/dataExams";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

type Props = {};

const HealthStory = (props: Props) => {
  return (
    <section className="health-story">
      <div className="wrapper">
        <h2 className="health-story__title">Phòng khám của tôi</h2>

        <div className="health-story__list">
          {dataHealthStories.map((item) => (
            <div className="health-story__item" key={item.key}>
              <div
                className="health-story__item__icon"
                style={{ backgroundColor: item.colorIcon }}
              >
                <item.icon width={24} height={24} />
              </div>
              <div className="health-story__item__content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="health-story__item__button">
                <Button type="text" className="health-story__item__btn">
                  Xem chi tiết
                  <ArrowFromRightIcon width={24} height={24} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthStory;
