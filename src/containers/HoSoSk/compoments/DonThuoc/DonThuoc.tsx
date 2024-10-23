import { ThuocUong } from "@/assets/svg";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Col, Row, Tabs } from "antd";

type Props = { 
  info: any; 
  setOpen?: any; 
  disableClose?: boolean 
};

const DonThuoc = ({ info, setOpen, disableClose = false }: Props) => {
  const [items, setItems] = useState<any>(null);

  const onChange = (key: string) => {
    console.log(key);
  };

  let renderThuoc = (props: any) => {
    return (
      <div className={styles["wrap-table"]}>
        <div className={styles["table-header"]}>
          <Row>
            <Col span={10}>Tên thuốc hoạt chất</Col>
            <Col span={4}>Số lượng</Col>
            <Col span={10}>Cách dùng</Col>
          </Row>
        </div>
        <div className={styles["table-body"]}>
          {props?.map((obj:any) => {
            return (
              <div className={styles["table-row"]}>
                <Row>
                  <Col span={10}>{obj.name}</Col>
                  <Col span={4}>{obj.sl}</Col>
                  <Col span={10}>{obj.cd}</Col>
                </Row>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  useEffect(() => {
    setItems([
      {
        key: "1",
        label: "Đơn thuốc 1",
        children: renderThuoc([
          {
            name: "Amoxicilin CRT 1G ",
            sl: "1",
            cd: "1",
          },
        ]),
      },
      {
        key: "2",
        label: "Đơn thuốc 2",
        children: renderThuoc([
          {
            name: "Amoxicilin CRT 1G ",
            sl: "2",
            cd: "2",
          },
          {
            name: "Amoxicilin CRT 1G ",
            sl: "3",
            cd: "3",
          },
          {
            name: "Amoxicilin CRT 1G ",
            sl: "3",
            cd: "3",
          },
          {
            name: "Amoxicilin CRT 1G ",
            sl: "3",
            cd: "3",
          },
          {
            name: "Amoxicilin CRT 1G ",
            sl: "3",
            cd: "3",
          },
          {
            name: "Amoxicilin CRT 1G ",
            sl: "3",
            cd: "3",
          },
          {
            name: "Amoxicilin CRT 1G ",
            sl: "3",
            cd: "3",
          },
          {
            name: "Amoxicilin CRT 1G ",
            sl: "3",
            cd: "3",
          },
          {
            name: "Amoxicilin CRT 1G ",
            sl: "3",
            cd: "3",
          },
          {
            name: "Amoxicilin CRT 1G ",
            sl: "3",
            cd: "3",
          },
          {
            name: "Amoxicilin CRT 1G ",
            sl: "3",
            cd: "3",
          },
          {
            name: "Amoxicilin CRT 1G ",
            sl: "3",
            cd: "3",
          },
        ]),
      },
    ]);
  }, []);

  return (
    <div className={styles["wrap-container"]}>
      <div className={styles["header"]}>
        <div className={styles["header-icon"]}>
          <ThuocUong />
        </div>
        <h3>Đơn thuốc</h3>
        <h4>Ngày 2 tháng 12 năm 2023</h4>
        <h4>Bác sĩ kê đơn: Nguyễn Văn Mạnh</h4>
      </div>
      <div className={styles["tab"]}>
        <Tabs items={items} onChange={onChange} />
      </div>
      <p className="my-[12px] text-[#868CAA] text-[16px]">
        <span className="text-[#121831] font-medium">Lưu ý: </span>Hẹn 02 tuần tái khám hoặc có diễn biến gì đặc biệt
        đến bệnh viện ngay
      </p>
      {!disableClose && (
        <p className="cursor-pointer my-[12px] bg-[#F5F6FA] text-[16px] h-[52px] flex justify-center  align-middle items-center" onClick={()=>{
          setOpen && setOpen(false)
        }}>
          Thoát
        </p>
      )}
    </div>
  );
};

export default DonThuoc;
