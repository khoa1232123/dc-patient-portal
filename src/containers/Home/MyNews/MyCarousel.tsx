import { logoThuCuc } from "@/assets/images";
import {
  ArrowFromRightIcon,
  BlisterPillOvalIcon,
  CalendarGreenIcon,
  CalendarWhiteIcon,
  DocumentOrangeIcon,
  FolderColorIcon,
  HeartMedicalWhiteIcon,
  HospitalWhiteIcon,
  TestTubeWhiteIcon,
  TimeGreenIcon,
  TimeWhiteIcon,
  UserWhiteIcon,
} from "@/assets/svg";
import { ButtonCustom } from "@/components";
import { Button, Carousel } from "antd";
import Image from "next/image";

type Props = {};

const MyCarousel = (props: Props) => {
  const settings = {
    infinite: true,
    centerMode: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
  };
  return (
    <Carousel centerPadding={"50px"} {...settings} className="my-carousel">
      {/* item 1 */}
      <div className="my-carousel__item__wrap">
        <div className="my-carousel__item type-1">
          <div className="my-carousel__item__title">
            <h3>Lịch khám sắp tới</h3>
          </div>
          <div className="my-carousel__item__info__wrap">
            <div className="my-carousel__item__info__wrap__title">
              <div className="my-carousel__item__info__wrap__title__icon">
                <TestTubeWhiteIcon className="" width={24} height={24} />
              </div>
              <h4>Phòng khám Đa khoa Deepcare</h4>
            </div>
            <div className="my-carousel__item__info__date">
              <div className="my-carousel__item__info__date__left">
                <CalendarWhiteIcon width={16} height={16} />
                <span>14/04/2023</span>
              </div>
              <div className="my-carousel__item__info__date__right">
                <TimeWhiteIcon width={16} height={16} />
                <span>13:30 - 14:00</span>
              </div>
            </div>
            <div className="my-carousel__item__info__list">
              <div className="my-carousel__item__info__item">
                <UserWhiteIcon width={16} height={16} />
                <span>Tăng thị Lương (tôi)</span>
              </div>
              <div className="my-carousel__item__info__item">
                <HeartMedicalWhiteIcon width={16} height={16} />
                <span>Khám nội tổng quát</span>
              </div>
              <div className="my-carousel__item__info__item">
                <HospitalWhiteIcon width={16} height={16} />
                <span>35 Lê Văn Thiêm, Thanh Xuân, Hà Nội</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* item 2 */}
      <div className="my-carousel__item__wrap">
        <div className="my-carousel__item type-2">
          <div className="my-carousel__item__title">
            <h3>Kết quả khám bệnh</h3>
            <span className="my-carousel__item__title__icon">Mới</span>
          </div>
          <div className="my-carousel__item__info__wrap mb-[12px]">
            <div className="my-carousel__item__info__wrap__title">
              <div className="my-carousel__item__info__wrap__title__icon">
                <Image
                  src={logoThuCuc}
                  alt="logo thu cuc"
                  width={20}
                  height={20}
                />
              </div>
              <h4>Phòng khám Đa khoa Thu cúc</h4>
            </div>
            <div className="my-carousel__item__info__date">
              <div className="my-carousel__item__info__date__left">
                <CalendarGreenIcon width={16} height={16} />
                <span>14/04/2023</span>
              </div>
              <div className="my-carousel__item__info__date__right">
                <TimeGreenIcon width={16} height={16} />
                <span>13:30 - 14:00</span>
              </div>
            </div>
            <div className="my-carousel__item__info__list">
              <div className="my-carousel__item__info__item">
                Dịch vụ:{" "}
                <span className="font-semibold">Khám nội tổng quát</span>
              </div>
            </div>
          </div>
          <ButtonCustom className="my-carousel__item__btn">
            Xem chi tiết
          </ButtonCustom>
        </div>
      </div>

      {/* item 3 */}
      <div className="my-carousel__item__wrap">
        <div className="my-carousel__item type-3 mb-2">
          <div className="my-carousel__item__title">
            <span className="my-carousel__item__title__icon">
              <BlisterPillOvalIcon width={24} height={14} />
            </span>
            <h3>Thuốc vừa dùng gần nhất</h3>
            <span className="my-carousel__item__title__count">2</span>
          </div>
          <div className="my-carousel__item__info__wrap">
            Amoxicilin CRT 1G CPR, Paracetamol ...
          </div>
          <div className="w-full">
            <Button
              type="text"
              className="my-carousel__item__btn !w-auto !text-[#5877F2]"
            >
              Xem chi tiết
              <ArrowFromRightIcon width={24} height={24} />
            </Button>
          </div>
        </div>
        <div className="my-carousel__item type-3">
          <div className="my-carousel__item__title">
            <span className="my-carousel__item__title__icon">
              <DocumentOrangeIcon width={24} height={24} />
            </span>
            <h3>Thuốc vừa dùng gần nhất</h3>
            <span className="my-carousel__item__title__count">1</span>
          </div>
          <div className="my-carousel__item__info__wrap">
            Amoxicilin CRT 1G CPR, Paracetamol ...
          </div>
          <div className="w-full">
            <Button type="text" className="my-carousel__item__btn">
              Xem chi tiết
              <ArrowFromRightIcon width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* item 4 */}
      <div className="my-carousel__item__wrap">
        <div className="my-carousel__item type-4">
          <span className="my-carousel__item__icon">
            <FolderColorIcon width={36} height={36} />
          </span>
          <div className="my-carousel__item__title">
            <h3>
              Cung cấp thông tin y tế giúp tôi theo dõi sức khoẻ của mình dễ
              dàng hơn
            </h3>
          </div>
          <div className="w-full">
            <Button
              type="text"
              className="my-carousel__item__btn !w-auto !text-[#5877F2]"
            >
              Hoàn thành hồ sơ y tế của tôi
              <ArrowFromRightIcon width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* item 3 */}
      <div className="my-carousel__item__wrap">
        <div className="my-carousel__item type-3 mb-2">
          <div className="my-carousel__item__title">
            <span className="my-carousel__item__title__icon">
              <BlisterPillOvalIcon width={24} height={14} />
            </span>
            <h3>Xét nghiệm gần nhất</h3>
            <span className="my-carousel__item__title__count">2</span>
          </div>
          <div className="my-carousel__item__info__wrap">
            Xét nghiệm nước tiểu, xét nghiệm máu...
          </div>
          <div className="w-full">
            <Button
              type="text"
              className="my-carousel__item__btn !w-auto !text-[#5877F2]"
            >
              Xem chi tiết
              <ArrowFromRightIcon width={24} height={24} />
            </Button>
          </div>
        </div>
        <div className="my-carousel__item type-3">
          <div className="my-carousel__item__title">
            <span className="my-carousel__item__title__icon">
              <DocumentOrangeIcon width={24} height={24} />
            </span>
            <h3>Chỉ số sức khoẻ mới</h3>
            <span className="my-carousel__item__title__count">1</span>
          </div>
          <div className="my-carousel__item__info__wrap">Cân nặng: 56kg</div>
          <div className="w-full">
            <Button type="text" className="my-carousel__item__btn">
              Xem chi tiết
              <ArrowFromRightIcon width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
