import { InputCustom, SelectCustom } from "@/components";
import DatePickerCustom from "@/components/DatePickerCustom";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  item?: HealthIndexProps;
  onClose?: () => void;
};

const renderValueNumberFrom = (key?: string) => {
  switch (key) {
    case "weight":
      return { min: 0, max: 600 };
    case "heart-rate":
      return { min: 0, max: 200 };
    case "height":
      return { min: 0, max: 200 };
    default:
      return { min: 0, max: 200 };
  }
};

const HealthModal = ({ open, item, onClose }: Props) => {
  const handleOk = () => {};
  const [measurement, setMeasurement] = useState<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });
  const [form] = useForm();

  useEffect(() => {
    form.setFieldsValue({ value: item?.value });
    setMeasurement(renderValueNumberFrom(item?.key));
  }, [item]);

  const dataHours = () => {
    const hours = [];
    for (let i = 0; i <= 23; i++) {
      hours.push({
        label: `${String(i).length === 1 ? "0" + i : i}`,
        value: i,
      });
    }
    return hours;
  };

  const dataMinutes = () => {
    const hours = [];
    for (let i = 0; i <= 59; i++) {
      hours.push({
        label: `${String(i).length === 1 ? "0" + i : i}`,
        value: i,
      });
    }
    return hours;
  };

  return (
    <Modal
      className="health-modal"
      centered
      open={open}
      onOk={handleOk}
      onCancel={onClose}
      width={472}
      okText={"Thêm"}
      cancelText={"Huỷ"}
      okButtonProps={{ className: "app-success okButton" }}
      cancelButtonProps={{ className: "app-success cancelButton" }}
    >
      <Form layout="vertical" form={form}>
        {item && (
          <div>
            <div className="health-modal__wrapper">
              <div className="health-modal__top">
                <div className="health-modal__icon">
                  <item.icon fill={item.colorIcon} width={48} height={48} />
                </div>
                <h2>{item.title}</h2>
              </div>
              <div className="health-modal__box">
                <h3>Thêm giá trị</h3>
                <p>Giá trị số từ {measurement.min} - {measurement.max}{item.unit}</p>
                <div className="health-modal__box__input">
                  <Form.Item label="" name={"value"}>
                    <Input type="number" step="0.1" max={600} min={0} />
                  </Form.Item>{" "}
                  {item.unit}
                </div>
              </div>
              <div className="health-modal__content">
                <Row gutter={22} className="gap-y-3">
                  <Col span={24}>
                    <DatePickerCustom label="Ngày đo" name={"measured-date"} />
                  </Col>
                  <Col span={12}>
                    <SelectCustom
                      label="Giờ"
                      options={dataHours()}
                      name={"hour"}
                    />
                  </Col>
                  <Col span={12}>
                    <SelectCustom
                      label="Phút"
                      options={dataMinutes()}
                      name={"minute"}
                    />
                  </Col>
                  <Col span={24}>
                    <InputCustom
                      label="Thông tin bổ sung"
                      className="w-full"
                      name={"additional-info"}
                      desc={
                        <div className="w-full health-modal__custom-label">
                          <span>
                            (VD: Thừa cân, béo phì, suy dinh dưỡng...)
                          </span>
                          <span>12/120</span>
                        </div>
                      }
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        )}
      </Form>
    </Modal>
  );
};

export default HealthModal;
