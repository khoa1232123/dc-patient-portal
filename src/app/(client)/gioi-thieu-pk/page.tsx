import { Button, Col, Collapse, Row, Space } from "antd";
import styles from "./intro.module.scss";
import { CheckOutlined, TwitterOutlined } from "@ant-design/icons";
import { Calling, Location } from "@/assets/svg";
import Image from "next/image";
import { download1Image, download2Image, Map, Video } from "@/assets/images";

const ClinicIntroduction = () => {
  return (
    <main className={styles.layout}>
      <div className={styles.main}>

        <section className={styles.head}>
          <h1>Phòng khám Đa khoa Deepcare</h1>
          <Button type="primary">
            Đặt hẹn
          </Button>
        </section>

        <section className={styles.content}>
          <Row gutter={[24, 24]}>
            <Col md={12} xs={24}>
              <div className={styles.preview}>
                <Image
                  className={styles.video}
                  src={Video}
                  alt='video'
                />
                <div className={styles.info}>
                  <h2>Giới thiệu chung</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
                  items={[
                    {
                      key: 'faq1',
                      label: (
                        <Space size={15}>
                          <TwitterOutlined />
                          <span>Nhi</span>
                        </Space>
                      ),
                      children: (
                        <Space direction="vertical" size={6}>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                        </Space>
                      ),
                      className: styles.blue,
                    },
                    {
                      key: 'faq2',
                      label: (
                        <Space size={15}>
                          <TwitterOutlined />
                          <span>Nhi</span>
                        </Space>
                      ),
                      children: (
                        <Space direction="vertical" size={6}>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                        </Space>
                      ),
                      className: styles.cyan,
                    },
                    {
                      key: 'faq3',
                      label: (
                        <Space size={15}>
                          <TwitterOutlined />
                          <span>Nhi</span>
                        </Space>
                      ),
                      children: (
                        <Space direction="vertical" size={6}>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                          <Space>
                            <CheckOutlined />
                            <span>Khám trẻ đi học</span>
                          </Space>
                        </Space>
                      ),
                      className: styles.yellow,
                    },
                  ]}
                />
              </div>
            </Col>
          </Row>
        </section>

        <section className={styles.collab}>
          <h2>Bảo lãnh viện phí trực tiếp</h2>
          <p>Phongkhamso hiện đang liên kết với 40+ doanh nghiệp bảo hiểm lớn và uy tín nhằm mang đến cho kháhc hàng dịch vụ chăm sóc sức khoẻ chất lượng  với chi phí hợp lý nhất.</p>
          <div className={styles.collab_list}>
            <Image
              src={download1Image}
              alt='logo'
            />
            <Image
              src={download2Image}
              alt='logo'
            />
            <Image
              src={download1Image}
              alt='logo'
            />
            <Image
              src={download2Image}
              alt='logo'
            />
            <Image
              src={download1Image}
              alt='logo'
            />
            <Image
              src={download2Image}
              alt='logo'
            />
          </div>
        </section>

        <Image
          className={styles.map}
          src={Map}
          alt='map'
        />

      </div>
    </main>
  )
}

export default ClinicIntroduction;