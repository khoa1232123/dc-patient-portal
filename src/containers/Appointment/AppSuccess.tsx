import { bgPartyImage, iconPartyPopper } from "@/assets/images";
import {
  CalendarBlueOutlineIcon,
  HeartMedicalIcon,
  MedicalKitIcon,
  TimeBlueOutlineIcon,
  UserColorIcon,
} from "@/assets/svg";
import { dataDoctors, dataMedicalSpecialties } from "@/constants/dataExams";
import { FormInstance, Modal } from "antd";
import Image from "next/image";

type Props = {
  data?: any;
  onClose?: () => void;
  form?: FormInstance<any>;
  onOk?: () => void;
  open?: boolean;
};

const AppSuccess = ({ data, open = false, onOk, onClose, form }: Props) => {
  const handleOk = () => {
    onOk && onOk();
  };

  return (
    <Modal
      centered
      open={open}
      onOk={handleOk}
      onCancel={onClose}
      className="base-modal"
      width={590}
      okButtonProps={{ className: "app-success okButton" }}
      cancelButtonProps={{ className: "app-success cancelButton" }}
      okText={"Đăng nhập"}
      cancelText={"Thoát"}
    >
      <div className="app-success">
        <div className="app-success__wrap">
          <h2 className="app-success__title">Đặt hẹn thành công</h2>
          <div className="app-success__thanks">
            <Image
              src={bgPartyImage}
              alt="party-popper"
              className="app-success__thanks__bg"
            />
            <Image
              src={iconPartyPopper}
              alt="party-popper"
              className="app-success__thanks__icon"
            />
            <p>
              Chúc mừng bạn đặt lịch hẹn thành công! Tổng đài sẽ liên hệ xác
              nhận thời gian khám chính xác tới quý khách sau khi quý khách đặt
              hẹn!
            </p>
          </div>

          <div className="app-success__info">
            <h3 className="app-success__info__title">Thông tin lịch hẹn</h3>
            <div className="app-success__info__wrap">
              <div className="app-success__info__wrap__title">
                <div className="app-success__info__wrap__title__icon">
                  <MedicalKitIcon className="" width={24} height={24} />
                </div>
                <h4>Phòng khám Đa khoa Deepcare</h4>
              </div>
              <div className="app-success__info__date">
                <div className="app-success__info__date__left">
                  <CalendarBlueOutlineIcon width={16} height={16} />
                  <span>14/04/2023</span>
                </div>
                <div className="app-success__info__date__right">
                  <TimeBlueOutlineIcon width={16} height={16} />
                  <span>13:30 - 14:00</span>
                </div>
              </div>
              <div className="app-success__info__list">
                <div className="app-success__info__item">
                  <UserColorIcon width={16} height={16} />
                  <span>
                    Người khám:{" "}
                    {
                      dataDoctors.find((item) => item.value === data?.doctor)
                        ?.label
                    }
                  </span>
                </div>
                <div className="app-success__info__item">
                  <HeartMedicalIcon width={16} height={16} />
                  <span>
                    Lý do khám:{" "}
                    {
                      dataMedicalSpecialties.find(
                        (item) => item.value === data?.specialty
                      )?.label
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AppSuccess;
