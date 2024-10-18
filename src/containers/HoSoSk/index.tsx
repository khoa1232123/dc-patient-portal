"use client";

import { ArrowRight, Files } from "@/assets/svg";
import styles from "./styles.module.scss";
import { Col, Row, Tabs } from "antd";
import { useState } from "react";
import XetNghiem from "./compoments/XetNghiem";
import CauChuyenSk from "./compoments/CauChuyenSk/CauChuyenSk";
import ChiSoSucKhoe from "./compoments/ChiSoSucKhoe";

type Props = {};

const tabs = [
  {
    label: `Câu chuyện sức khoẻ`,
    key: "health-story",
  },
  {
    label: `Kết quả xét nghiệm`,
    key: "test-results",
  },
  {
    label: `Chỉ số sức khỏe`,
    key: "health-index",
  },
];


const HoSoSk = (props: Props) => {
  const [tab, setTab] = useState("health-story");

  const rendertab = () => {
    switch (tab) {
      case "health-story":
         return <CauChuyenSk/>

      case "test-results":
        return <XetNghiem/>
    

      case "health-index":
        return <ChiSoSucKhoe />

      default:
        return "health-story"
    }
  }
 
  return (
    <main className={styles["health-record"]}>
      <section className={`${styles["wrap-complete"]} ${styles["layout"]}`}>
        <div className={styles["wrap-complete-content"]}>
          <div className={styles["content-icon"]}>
            <Files />
          </div>
          <div className={styles["content-text"]}>
            <h3 className={styles["text-header"]}>Hồ sơ sức khoẻ</h3>
            <h3 className={styles["text-des"]}>
              Cung cấp thông tin y tế giúp tôi theo dõi sức khoẻ của mình dễ
              dàng hơn
            </h3>
            <h3 className={styles["text-link"]}>
              Hoàn thành hồ sơ y tế của tôi
              <span>
                <ArrowRight />
              </span>
            </h3>
          </div>
        </div>
      </section>
      <section className={`${styles["wrap-main"]} ${styles["layout"]}`}>
        <Row gutter={[24, 24]}>
          <Col span={7}>
            <div className={styles["main-left"]}>
              <Tabs
                activeKey={tab}
                tabPosition={"right"}
                onChange={(activekey)=>setTab(activekey)}
                items={tabs.map((obj, i) => {
                  return {
                    label: obj.label,
                    key: obj.key,
                  };
                })}
              />
            </div>
          </Col>
          <Col span={17}>
            <div className={styles["main-right"]}>
              {rendertab()}
            </div>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default HoSoSk;
