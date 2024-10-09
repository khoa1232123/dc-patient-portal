"use client";
import { appointmentBg } from "@/assets/images";
import { CalendarBlueIcon, PlusGrayIcon, TimeBlueIcon } from "@/assets/svg";
import { dataDate, dataTime } from "@/constants/dataExams";
import { Button, Col, Form, Input, Radio, Row, Select } from "antd";
import { useState } from "react";
import { ClientFooter } from "../Layout";
import { InputCustom, SelectCustom } from "@/components";

type Props = {};

const Appointment = (props: Props) => {
  const [dateSelected, setDateSelected] = useState<any>({ key: 1 });
  const [timeSelected, setTimeSelected] = useState<any>({ key: 1 });
  return (
    <section
      className="appointment-page px-6"
      style={{ backgroundImage: `url(${appointmentBg.src})` }}
    >
      <Row>
        <Col span={8}>
          <div className="appointment-page__left">
            <h1 className="appointment-page__left__title">Book local doctor who take your insurance</h1>
            <p className="appointment-page__left__desc">Book local doctor who take your insurance</p>
          </div>
        </Col>
        <Col span={16}>
          <div className="appointment-page__right">
            <Form layout="vertical">
              <Row gutter={22} className="gap-y-4">
                <Col span={12}>
                  <h2 className="appointment-page__title">Thông tin khám</h2>
                  <Row gutter={12} className="gap-y-4 mb-4">
                    <Col span={12}>
                      <InputCustom
                        label="Họ tên"
                        placeholder="Họ tên"
                        name={"name"}
                        rules={[{ required: true, message: "" }]}
                      />
                    </Col>
                    <Col span={12}>
                      <InputCustom
                        label="Số điện thoại"
                        placeholder="Số điện thoại"
                        name={"phone"}
                        rules={[{ required: true, message: "" }]}
                      />
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Giới tính" layout="horizontal">
                        <Radio.Group>
                          <Radio value={1}>Nam</Radio>
                          <Radio value={2}>Nữ</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <InputCustom
                        label="Lý do"
                        placeholder="Lý do"
                        name={"reason"}
                      />
                    </Col>
                    <Col span={24}>
                      <SelectCustom
                        label="Triệu chứng/Tình trạng sức khoẻ"
                        options={[{ value: "lucy", label: "Lucy" }]}
                        placeholder="Chọn"
                        rules={[{ required: true, message: "" }]}
                        allowClear
                        name={"status"}
                      />
                    </Col>

                    <Col span={24}>
                      <SelectCustom
                        label="Chuyên khoa"
                        options={[{ value: "lucy", label: "Lucy" }]}
                        placeholder="Chọn"
                        rules={[{ required: true, message: "" }]}
                        allowClear
                        name={"department"}
                      />
                    </Col>
                    <Col span={24}>
                      <SelectCustom
                        label="Bác sĩ"
                        options={[{ value: "lucy", label: "Lucy" }]}
                        placeholder="Chọn"
                        rules={[{ required: true, message: "1" }]}
                        allowClear
                        name={"doctor"}
                      />
                    </Col>
                    <Col span={24}>
                      <SelectCustom
                        label="Phòng khám"
                        options={[{ value: "lucy", label: "Lucy" }]}
                        placeholder="Chọn"
                        rules={[{ required: true, message: "" }]}
                        allowClear
                        name={"room"}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <h2 className="appointment-page__title">Thời gian khám</h2>
                  <Row style={{ gap: "12px", marginBottom: "12px" }}>
                    <Col span={24}>
                      <div className="appointment-page__date__title">
                        <CalendarBlueIcon width={20} height={20} />
                        <h3 className="">
                          Ngày Khám <span className="text-red-500">*</span>
                        </h3>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className="appointment-page__date__list">
                        {dataDate.map((item) => (
                          <div
                            key={item.key}
                            onClick={() => setDateSelected(item)}
                            className={
                              "appointment-page__date__item " +
                              (dateSelected?.key === item.key ? " active" : "")
                            }
                          >
                            <span className="appointment-page__date__item--date">
                              {item?.date ? (
                                item?.date
                              ) : (
                                <PlusGrayIcon width={24} height={24} />
                              )}
                            </span>
                            <span className="appointment-page__date__item--text">
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ gap: "12px", marginBottom: "12px" }}>
                    <Col span={24}>
                      <div className="appointment-page__time__title">
                        <TimeBlueIcon width={20} height={20} />
                        <h3 className="">Giờ đặt hẹn</h3>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className="appointment-page__time__list">
                        {dataTime.map((item) => (
                          <div
                            key={item.key}
                            onClick={() => setTimeSelected(item)}
                            className={
                              "appointment-page__time__item " +
                              (timeSelected?.key === item.key ? " active" : "")
                            }
                          >
                            <span className="appointment-page__time__item--time">
                              {item.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Col>
                  </Row>

                  <div className="appointment-page__note">
                    <span className="font-semibold">Lưu ý:</span> Sau khi đặt
                    hẹn, quý khách vui lòng chờ tổng đài xác nhận lại khung thời
                    gian khám chính xác.
                  </div>
                </Col>
                <Col span={24}>
                  <Form.Item className="mb-0">
                    <Button className="base-btn !w-full">Đặt lịch khám</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
          <ClientFooter className="text-white" />
        </Col>
      </Row>
    </section>
  );
};

export default Appointment;
