import { Map, download1Image, download2Image } from "@/assets/images";
import { Calling, Location } from "@/assets/svg";
import { dataClinicServiceList } from "@/constants/dataExams";
import { CheckOutlined } from "@ant-design/icons";
import { Button, Carousel, Col, Collapse, Row, Space } from "antd";
import Image from "next/image";
import styles from "./intro.module.scss";

const ClinicIntroduction = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
  };
  const renderCollapse = () => {
    const data: any[] = [];
    dataClinicServiceList.forEach((item) => {
      const it = {
        key: item.key,
        label: (
          <Space size={12}>
            <item.icon fill={item.colorPrimary} width={24} height={24} />
            <span>{item.title}</span>
          </Space>
        ),
        children: (
          <Space direction="vertical" size={6}>
            {item.children.map((it, index) => (
              <Space key={index}>
                <CheckOutlined style={{ color: item.colorPrimary }} />
                <span>{it}</span>
              </Space>
            ))}
          </Space>
        ),
        style: { background: item.colorSecond, borderColor: item.colorPrimary },
      };
      data.push(it);
    });

    return data;
  };

  return (
    <section className={styles["clinic-introduction"]}>
      <div className={"wrapper"}>
        <section className={styles.head}>
          <h1>Phòng khám Đa khoa Deepcare</h1>
          <Button type="primary">Đặt hẹn</Button>
        </section>

        <section className={styles.content}>
          <Row gutter={[24, 24]}>
            <Col md={12} xs={24}>
              <div className={styles.preview}>
                <div className={styles.iframe}>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/I2lpFBqNuFo?si=7IUVFql1XxHk3y3h"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className={styles.info}>
                  <h2>Giới thiệu chung</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h2>Liên hệ</h2>
                  <div>
                    <Space>
                      <Calling />
                      <p>Địa chỉ: 302 Lê Văn Thiêm, Thanh Xuân</p>
                    </Space>
                    <br />
                    <Space>
                      <Location />
                      <p>Hotline: 929 0902 838</p>
                    </Space>
                  </div>
                  <h2>Giờ làm việc</h2>
                  <div>
                    <p>Thứ 2 - thứ 6: 8:30 - 12:30 / 13:30 - 18:00</p>
                    <p>Thứ 7, chủ nhật: nghỉ</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className={styles.service_list}>
                <h2>Dịch vụ</h2>
                <Collapse
                  className={styles.collapse}
                  bordered={false}
                  expandIconPosition="end"
                  items={[...renderCollapse()]}
                />
              </div>
            </Col>
          </Row>
        </section>

        <section className={styles.collab}>
          <h2>Bảo lãnh viện phí trực tiếp</h2>
          <p>
            Phongkhamso hiện đang liên kết với 40+ doanh nghiệp bảo hiểm lớn và
            uy tín nhằm mang đến cho kháhc hàng dịch vụ chăm sóc sức khoẻ chất
            lượng với chi phí hợp lý nhất.
          </p>
          <div className={styles.collab_list}>
            <Carousel {...settings}>
              <div className="slider-item">
                <Image src={download1Image} alt="logo" />
              </div>
              <div className="slider-item">
                <Image src={download2Image} alt="logo" />
              </div>
              <div className="slider-item">
                <Image src={download1Image} alt="logo" />
              </div>
              <div className="slider-item">
                <Image src={download2Image} alt="logo" />
              </div>
              <div className="slider-item">
                <Image src={download1Image} alt="logo" />
              </div>
              <div className="slider-item">
                <Image src={download2Image} alt="logo" />
              </div>
            </Carousel>
          </div>
        </section>

        <Image className={styles.map} src={Map} alt="map" />
      </div>
    </section>
  );
};

export default ClinicIntroduction;
