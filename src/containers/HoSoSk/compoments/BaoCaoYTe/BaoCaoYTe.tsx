import React from "react";
import styles from "./styles.module.scss";
import { KetLuan } from "@/assets/svg";
import { Col, Row } from "antd";

const BaoCaoYTe = ({ info }: { info: any }) => {
  return (
    <div className={styles["wrap-container"]}>
      <div className={styles["header"]}>
        <div className={styles["header-icon"]}>
          <KetLuan />
        </div>
        <h3>Báo cáo y tế</h3>
        <h4>Ngày 2 tháng 12 năm 2023</h4>
      </div>
      <h2>
        <span className={styles.heading}>I.THÔNG TIN HÀNH CHÍNH</span>
      </h2>
      <Row className={styles["item-1"]} style={{marginTop:12}}>
        <Col span={8}>
          <p>
            <span>Mã khách hàng:</span>M12394395
          </p>
        </Col>
        <Col span={8}>
          <span>Họ và tên:</span>LƯU ĐÌNH ĐA
        </Col>
        <Col span={8}>
          <span>Ngày sinh:</span>12/12/2000
        </Col>

        <Col span={8}>
          <p>
            <span>Giới tính:</span>Nam
          </p>
        </Col>
        <Col span={8}>
          <span>Đối tượng:</span>thu phí
        </Col>
        <Col span={8}>
          <span>Số điện thoại:</span>0932 293 289
        </Col>
        <Col span={24}>
          <span>Địa chỉ:</span>Lô 22 số 35 Lê Văn Thiêm
        </Col>
        <Col span={24}>
          <span>Bác sĩ khám:</span>Tăng Thị Lương
        </Col>
        <Col span={24}>
          <span>Khoa phòng:</span>Nội tổng hợp
        </Col>
      </Row>
      <h2>
        <span className={styles.heading}>II.THÔNG TIN KHÁM BỆNH</span>
      </h2>
      <div className={styles["thong-tin-kham"]}>
        <div className={styles["thong-tin-kham__left"]}>
          <p>
            <span className="font-medium text-[#121831]">1. Lý do khám:</span>
            đay là lý do
          </p>
          <p>
            <span className="font-medium text-[#121831]">
              2. Quá trình bệnh lý:{" "}
            </span>{" "}
            đây là quá trình
          </p>
          <p>
            <span className="font-medium text-[#121831]">
              3. Triệu chứng lâm sàng:{" "}
            </span>{" "}
            đây là triệu chứng
          </p>
          <p>
            <span className="font-medium text-[#121831]">4. Tiền sử bệnh:</span>{" "}
            đây là tiền sử
          </p>
        </div>
        <div className={styles["thong-tin-kham__right"]}>
          <p>
            <span>Mạch:</span>(lần/phút)
          </p>
          <p>
            <span>Nhiệt độ:</span> (độ C){" "}
          </p>
          <p>
            <span>Huyết áp:</span> (mmHg)
          </p>
          <p>
            <span>Nhịp thở:</span> (lần/phút)
          </p>
          <p>
            <span>Cân nặng:</span> (kg)
          </p>
          <p>
            <span>Chiều cao:</span> (cm)
          </p>
        </div>
      </div>
      <h2>
        <span className={styles.heading}>III. KHÁM BỆNH</span>
      </h2>

      <div className={styles["item-3"]} style={{marginTop:12}}>
        <p>
          <span>1.  Toàn thân:</span>
        </p>
        <p>
          <span>2.  Các bộ phận:</span>
        </p>
        <p>
          <span>3.  Chẩn đoán bệnh chính:</span>
        </p>
        <p>
          <span>4.  Mã bệnh kèm theo:</span>
        </p>
        <p>
          <span>5.  Chẩn đoán xác định:</span>
        </p>
        <p>
          <span>6.  Kết quả CLS:</span>
        </p>
        <p>
          <span>7.  Hướng xử trí:</span>
        </p>
        <p>
          <span>8.  Lời dặn:</span>
        </p>
        <p>
          <span>9.  Ngày tái khám:</span>
        </p>
        <p className="flex mt-[24px]">
          <span>Lưu ý:</span>
          <span className="text-[#868CAA] text-[16px]">Hẹn 02 tuần tái khám hoặc có diễn biến gì đặc biệt đến bệnh viện ngay</span>
        </p>
      </div>
    </div>
  );
};

export default BaoCaoYTe;
