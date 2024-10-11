import { Carousel } from "antd";

type Props = {};

const SliderIntro = (props: Props) => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
    <Carousel className="slider-intro">
      <div className="slider-intro__item">
        <h3>Đặt khám dễ dàng</h3>
        <p>Ứng dụng đặt lịch khám bệnh tại hơn 10 phòng khám đa khoa, chuyên khoa và đa dạng các tiện ích khác</p>
      </div>
      <div className="slider-intro__item">
        <h3>Đặt khám dễ dàng</h3>
        <p>Ứng dụng đặt lịch khám bệnh tại hơn 10 phòng khám đa khoa, chuyên khoa và đa dạng các tiện ích khác</p>
      </div>
      <div className="slider-intro__item">
        <h3>Đặt khám dễ dàng</h3>
        <p>Ứng dụng đặt lịch khám bệnh tại hơn 10 phòng khám đa khoa, chuyên khoa và đa dạng các tiện ích khác</p>
      </div>
      <div className="slider-intro__item">
        <h3>Đặt khám dễ dàng</h3>
        <p>Ứng dụng đặt lịch khám bệnh tại hơn 10 phòng khám đa khoa, chuyên khoa và đa dạng các tiện ích khác</p>
      </div>
    </Carousel>
  );
};

export default SliderIntro;
