import {
  HeartMedicalIcon,
  LocationPointIcon,
  PhoneBlueIcon,
  PhoneIcon,
  TimeBlueIcon,
} from "@/assets/svg";
import { ButtonCustom } from "@/components";
import { dataMyClinics } from "@/constants/dataExams";
import Link from "next/link";
import React from "react";

type Props = {};

const MyClinic = (props: Props) => {
  return (
    <section className="my-clinic">
      <div className="wrapper">
        <h2 className="my-clinic__title">Phòng khám của tôi</h2>
        <div className="my-clinic__list">
          {dataMyClinics.map((item) => (
            <div key={item.key} className="my-clinic__item">
              <div className="my-clinic__item__left">
                <div className="flex flex-col justify-center items-center">
                  <div className="my-clinic__item__icon">
                    <item.icon width={36} height={36} />
                  </div>
                  <span className="my-clinic__item__space">{item.space}</span>
                </div>
                <div className="my-clinic__item__content">
                  <Link href={"/gioi-thieu-pk"}>
                    <h3>{item.label}</h3>
                  </Link>
                  <p>
                    <LocationPointIcon width={12} height={12} />
                    {item.address}
                  </p>
                  <p>
                    <HeartMedicalIcon width={12} height={12} />
                    {item.department}
                  </p>
                </div>
              </div>
              <div className="my-clinic__item__right">
                <div className="my-clinic__item__schedule">
                  <div className="my-clinic__item__schedule__item">
                    <TimeBlueIcon width={24} height={24} />
                    <span>{item.time}</span>
                  </div>
                  <div className="my-clinic__item__schedule__item">
                    <PhoneBlueIcon width={24} height={24} />
                    <span>{item.phone}</span>
                  </div>
                </div>
                <div className="my-clinic__item__button">
                  <ButtonCustom className="!h-[48px] !min-w-[150px]">
                    Đặt hẹn
                  </ButtonCustom>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyClinic;
