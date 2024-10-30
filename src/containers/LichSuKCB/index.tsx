"use client";
import {
  CalendarBlueOutlineIcon,
  HeartMedicalIcon,
  HospitalIcon,
  TestTubeWhiteIcon,
  TimeBlueOutlineIcon,
  UserIcon
} from "@/assets/svg";
import { SelectCustom } from "@/components";
import DatePickerCustom from "@/components/DatePickerCustom";
import { CloseOutlined } from "@ant-design/icons";
import { Col, Form, Row } from "antd";
import HistoryContent from "./HistoryContent";
import { dataMedicalHistory } from "@/constants/dataExams";

type Props = {};

const LichSuKCB = (props: Props) => {
  return (
    <section className="medical-history">
      <div className="wrapper">
        <Row>
          <Col span={24}>
            <h1 className="medical-history__title">Lịch sử khám chữa bệnh</h1>
          </Col>
          <Col span={24}>
            <Form>
              <div className="medical-history__filter">
                <div className="medical-history__filter__text">Bộ lọc</div>
                <div className="medical-history__filter__select">
                  <SelectCustom
                    name="type"
                    placeholder="Chọn loại khám"
                    options={[
                      {
                        label: "Khám cá nhân",
                        value: "person",
                      },
                      {
                        label: "Khám đa khoa",
                        value: "hospital",
                      },
                    ]}
                  />
                </div>
                <div className="medical-history__filter__select">
                  <DatePickerCustom name="date" placeholder="Chọn ngày" />
                </div>
                <div className="medical-history__filter__clear">
                  <button type="button">
                    <CloseOutlined />
                  </button>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
        <div className="wrapper-content">
          <Row>
            <Col span={8} style={{ padding: "6px" }}>
              <HistoryContent status="waiting" data={dataMedicalHistory.filter(item => item.status === "waiting") || []} />
            </Col>
            <Col span={8} style={{ padding: "6px" }}>
              <HistoryContent status="confirmed" data={dataMedicalHistory.filter(item => item.status === "confirmed") || []} />
            </Col>
            <Col span={8} style={{ padding: "6px" }}>
              <HistoryContent status="complete" data={dataMedicalHistory.filter(item => item.status === "complete") || []} />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default LichSuKCB;
