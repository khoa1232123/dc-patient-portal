import {
  ArrowRight,
  ChuanDoanHa,
  KetLuan,
  ThuocUong,
  XetNghiem,
} from "@/assets/svg";
import { Modal } from "antd";
import { useState } from "react";
import BaoCaoYTe from "../BaoCaoYTe/BaoCaoYTe";
import styles from "./styles.module.scss";
import DonThuoc from "../DonThuoc/DonThuoc";
import KetQuaXn from "../KetQuaXn/KetQuaXn";
import ChanDoanHA from "../ChanDoanHA";

const typeList = [
  {
    key: "KETLUAN",
  },
  {
    key: "THUOCUONG",
  },
  {
    key: "XETNGHIEM",
  },
  {
    key: "CHUANDOANHA",
  },
];
const CauChuyenSk = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState<any>("");

  const renderType = (type: any) => {
    if (type == "KETLUAN") {
      return (
        <div className={styles["detail-left"]}>
          <div
            className={`${styles["left-icon"]} ${styles["icon-kl"]}`}
            style={{ backgroundColor: "#FFA24C" }}
          >
            <KetLuan />
          </div>
          <div className={styles["left-text"]}>
            <h5>Kết luận bệnh: Viêm đại tràng cấp tính</h5>
            <h6>
              <span>Bác sĩ</span>: Nguyễn Văn Mạnh - <span>Chuyên khoa</span>:
              Khoa nội
            </h6>
          </div>
        </div>
      );
    }

    if (type == "THUOCUONG") {
      return (
        <div className={styles["detail-left"]}>
          <div
            className={`${styles["left-icon"]} ${styles["icon-kl"]}`}
            style={{ backgroundColor: "#35C4C4" }}
          >
            <ThuocUong />
          </div>
          <div className={styles["left-text"]}>
            <h5>Thuốc uống</h5>
            <h6>Đơn thuốc </h6>
          </div>
        </div>
      );
    }

    if (type == "XETNGHIEM") {
      return (
        <div className={styles["detail-left"]}>
          <div
            className={`${styles["left-icon"]} ${styles["icon-kl"]}`}
            style={{ backgroundColor: "#FC9AA2" }}
          >
            <XetNghiem />
          </div>
          <div className={styles["left-text"]}>
            <h5>Xét nghiệmg</h5>
            <h6>Xét nghiệm nước tiểu, xét nghiệm máu</h6>
          </div>
        </div>
      );
    }

    if (type == "CHUANDOANHA") {
      return (
        <div className={styles["detail-left"]}>
          <div
            className={`${styles["left-icon"]} ${styles["icon-kl"]}`}
            style={{ backgroundColor: "#537AFD" }}
          >
            <ChuanDoanHa />
          </div>
          <div className={styles["left-text"]}>
            <h5>Chẩn đoán hình ảnh</h5>
            <h6>Siêu âm ổ bụng</h6>
          </div>
        </div>
      );
    }

    return (
      <div className={styles["detail-left"]}>
        <div className={styles["left-icon"]}>icon</div>
        <div className={styles["left-text"]}></div>
      </div>
    );
  };

  const handleOpen = (props: any) => {
    setInfo(props);
    setOpen(true);
  };

  const renderBodyModal = () => {
    switch (info?.key) {
      case "KETLUAN":
        return <BaoCaoYTe info={info} />;
      case "THUOCUONG":
        return <DonThuoc info={info} setOpen={setOpen} />;

      case "XETNGHIEM":
        return <KetQuaXn info={info} setOpen={setOpen} />;

        case "CHUANDOANHA":
          return <ChanDoanHA info={info} setOpen={setOpen} />;
  
      default:
        return "";
    }

    return "";
  };

  return (
    <div className={styles["cau-chuyen-sk"]}>
      <h3 className={styles["header"]}>Câu chuyện sức khoẻ của tôi</h3>
      <h4 className={styles["des"]}>
        Tìm tất cả các yếu tố về lịch sử sức khoẻ của bạn ở đây. Dữ liệu được
        hiển thị cho các chuyên gia chăm sóc sức khoẻ được uỷ quyền truy cập tài
        liệu của bạn
      </h4>
      <div className={styles["list-item"]}>
        {new Array(10).fill(null).map((detail, index) => {
          return (
            <div className={styles["item"]}>
              <h4>Ngày 2 tháng 12 năm 2023</h4>
              <div className={styles["item-info"]}>
                <span className={styles["item-name"]}>
                  <span className="font-medium">Phòng khám: </span>
                  <span>Phòng khám đa khoa Deepcare</span>
                </span>
                <span className={styles["item-location"]}>
                  <span className="font-medium">Địa chỉ: </span>
                  <span>Lô 22, số 35 Lê Văn Thiêm, Thanh Xuân, Hà Nội</span>
                </span>
              </div>

              {typeList.map((detail) => {
                return (
                  <div className={styles["item-detail"]}>
                    {renderType(detail.key)}
                    <div
                      className={styles["detail-right"]}
                      onClick={() => handleOpen(detail)}
                    >
                      <span className={styles["right-total"]}>2</span>
                      <span className={styles["right-xct"]}>Xem chi tiết</span>
                      <ArrowRight />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Modal
        width={1093}
        title={false}
        open={open}
        footer={false}
        onCancel={() => setOpen(false)}
      >
        {renderBodyModal()}
      </Modal>
    </div>
  );
};

export default CauChuyenSk;
