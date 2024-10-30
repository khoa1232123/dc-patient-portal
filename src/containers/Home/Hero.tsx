import { gumroadBg } from "@/assets/images";
import { ButtonCustom } from "@/components";
import { dataHeroItems } from "@/constants/dataExams";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${gumroadBg.src})` }}
    >
      <div className="wrapper">
        <div className="hero__wrap">
          <h3 className="hero__top">
            Bạn có quyền kiểm soát sức khoẻ của mình
          </h3>
          <h1 className="hero__title">Cung cấp bởi đặt khám</h1>
          <p className="hero__desc">
            Không gian sức khoẻ của tôi cho phép bạn lưu trữ và chia sẻ dữ liệu
            và tài liệu sức khoẻ của mình một cách hoàn toàn bảo mật
          </p>
          <div className="hero__btns">
            <ButtonCustom className="hero__btns--profile">
              Xem hồ sơ y tế của tôi
            </ButtonCustom>
            <ButtonCustom className="hero__btns--doc">
              Thêm tài liệu về sức khoẻ
            </ButtonCustom>
          </div>
          <div className="hero__list">
            {dataHeroItems.map((item) => (
              <div key={item.key} className="hero__item">
                <item.icon width={48} height={48} />
                <h4>{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
