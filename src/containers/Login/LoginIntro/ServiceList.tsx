import { dataServiceList } from "@/constants/dataExams";
import React from "react";

type Props = {};

const ServiceList = (props: Props) => {
  return (
    <div className="service-list">
      {dataServiceList.map((service) => (
        <div className="service-list__item" key={service.key}>
          <div className="service-list__item__icon">
            <service.icon width={48} height={48} />
          </div>
          <div className="service-list__item__content">
            <h4 className="service-list__item__label">{service.label}</h4>
            <p className="service-list__item__desc">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
