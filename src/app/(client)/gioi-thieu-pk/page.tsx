import { Button, Col, Row } from "antd";
import styles from "./intro.module.scss";

const ClinicIntroduction = () => {
  return (
    <main className={styles.main}>

      <section className={styles.head}>
        <h1>Phòng khám Đa khoa Deepcare</h1>
        <Button type="primary">
          Đặt hẹn
        </Button>
      </section>

      <section className={styles.content}>
        <Row gutter={24}>
          <Col span={12}></Col>
          <Col span={12}></Col>
        </Row>
      </section>

      <section>3</section>

      <section>4</section>

    </main>
  )
}

export default ClinicIntroduction;