"use client";
import { CalendarBlueIcon, PlusGrayIcon, TimeBlueIcon } from "@/assets/svg";
import { InputCustom, SelectCustom } from "@/components";
import {
  dataClinics,
  dataDate,
  dataDoctors,
  dataHealthConditions,
  dataMedicalSpecialties,
  dataTime,
} from "@/constants/dataExams";
import { useAuthContext } from "@/contexts/AuthContext";
import { Col, Form, Radio, Row } from "antd";
import { useState } from "react";
import AppSuccess from "./AppSuccess";
import SelectSuggestAI from "./SelectSuggestAI";

type Props = {};

const Appointment = ({}: Props) => {
  const [dateSelected, setDateSelected] = useState<any>({ key: 1 });
  const [timeSelected, setTimeSelected] = useState<any>({ key: 1 });
  const [dataForm, setDataForm] = useState<{ [key: string]: any }>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState<{
    clinic?: string;
    date?: string;
    time?: string;
    doctor?: string;
    healthCondition?: string;
    specialty?: string;
  }>({});

  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log({ values });
    setModalOpen(true);
    setData(values);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={dataForm}
      onFinish={handleFinish}
    >
      <Row gutter={22} className="gap-y-4">
        <Col sm={24} md={12}>
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
              <Form.Item
                label="Giới tính"
                layout="horizontal"
                className="base-radio"
              >
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
                rules={[{ required: true, message: "" }]}
              />
            </Col>
            <Col span={24}>
              <SelectCustom
                label="Triệu chứng/Tình trạng sức khoẻ"
                options={dataHealthConditions}
                placeholder="Tìm kiếm nhanh triệu chứng"
                rules={[{ required: true, message: "" }]}
                allowClear
                name={"healthConditions"}
                onChange={(e) =>
                  setDataForm({
                    ...dataForm,
                    healthConditions: e,
                    specialty: "",
                    doctor: "",
                    specialtyAI: true,
                  })
                }
              />
            </Col>
            {dataForm.healthConditions && (
              <Col span={24}>
                <SelectSuggestAI
                  form={form}
                  name="specialty"
                  data={dataMedicalSpecialties}
                  isOpenForm={dataForm.specialtyAI}
                  infoSelect={{
                    label: "Chuyên khoa",
                    placeholder: "Chọn chuyên khoa",
                  }}
                  onChange={(e) => {
                    setDataForm({
                      ...dataForm,
                      specialty: e,
                      specialtyAI: false,
                      doctorAI: true,
                    });
                  }}
                />
              </Col>
            )}

            {dataForm.specialty && (
              <Col span={24}>
                <SelectSuggestAI
                  form={form}
                  name="doctor"
                  data={dataDoctors}
                  isOpenForm={dataForm.doctorAI}
                  typeSuggest="type2"
                  infoSelect={{
                    label: "Bác sĩ",
                    placeholder: "Chọn bác sĩ",
                  }}
                  onChange={(e) => {
                    setDataForm({
                      ...dataForm,
                      doctor: e,
                      doctorAI: false,
                    });
                  }}
                />
              </Col>
            )}
            <Col span={24}>
              <SelectCustom
                label="Phòng khám"
                options={dataClinics}
                placeholder="Chọn"
                rules={[{ required: true, message: "" }]}
                allowClear
                name={"clinic"}
              />
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={12}>
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
                    onClick={() => {
                      setDateSelected(item);
                      form.setFieldValue("date", item.date);
                    }}
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
                    onClick={() => {
                      setTimeSelected(item);
                      form.setFieldValue("time", item.time);
                    }}
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
            <span className="font-semibold">Lưu ý:</span> Sau khi đặt hẹn, quý
            khách vui lòng chờ tổng đài xác nhận lại khung thời gian khám chính
            xác.
          </div>
        </Col>
        <Col span={24}>
          <Form.Item className="mb-0">
            <button className="base-btn !w-full" type="submit">
              Đặt lịch khám
            </button>
          </Form.Item>
        </Col>
      </Row>
      
      <AppSuccess
        open={modalOpen}
        data={data}
        onClose={() => setModalOpen(false)}
        form={form}
      />
    </Form>
  );
};

export default Appointment;
