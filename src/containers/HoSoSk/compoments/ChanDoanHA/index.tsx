import {
  TestTubeIcon,
  TestTubeWhiteIcon,
  ThuocUong,
  XrayWhiteIcon,
} from "@/assets/svg";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Col, Row, Tabs } from "antd";
import Image from "next/image";
import {
  CDHA01Image,
  CDHA02Image,
  CDHA03Image,
  CDHA04Image,
} from "@/assets/images";

type Props = { 
  info: any; 
  setOpen?: any; 
  disableClose?: boolean 
};

const ChanDoanHA = ({ info, setOpen, disableClose = false }: Props) => {
  const [items, setItems] = useState<any>(null);

  const onChange = (key: string) => {
    console.log(key);
  };

  useEffect(() => {
    setItems([
      {
        key: "1",
        label: "Siêu âm vòm họng",
        children: RenderTab({
          data: {
            title: "SIÊU ÂM KHỚP (GỐI, HÁNG, KHUỶU, CỔ TAY....)",
            fullName: "Phạm Hồng Sơn",
            address: "Tam Nông, Phú Thọ",
            doctorIndication: "Nguyễn Đăng Duy",
            technicalIndication: "Phẫu thuật",
            result: "Viêm khớp háng",
            conclusion: "Cần phải mổ nội soi, không làm ảnh hưởng đến thẩm mỹ",
            advice: (
              <div className="grid grid-cols-4 gap-4">
                <Image src={CDHA01Image} alt="CDHA01" />
                <Image src={CDHA02Image} alt="CDHA02" />
                <Image src={CDHA03Image} alt="CDHA03" />
                <Image src={CDHA04Image} alt="CDHA04" />
              </div>
            ),
          },
        }),
      },
      {
        key: "2",
        label: "X-Quang ngực phải",
        children: RenderTab({
          data: {
            title: "X-Quang ngực phải",
            fullName: "Phạm Hồng Sơn",
            address: "Tam Nông, Phú Thọ",
            doctorIndication: "Nguyễn Đăng Duy",
            technicalIndication: "Chụp Citi cắt lớp",
            result: "Gãi xương đòn trái",
            conclusion: "Bó bột",
            advice: (
              <div className="grid grid-cols-4 gap-4">
                <Image src={CDHA01Image} alt="CDHA01" />
                <Image src={CDHA02Image} alt="CDHA02" />
                <Image src={CDHA03Image} alt="CDHA03" />
                <Image src={CDHA04Image} alt="CDHA04" />
              </div>
            ),
          },
        }),
      },
    ]);
  }, []);

  return (
    <div className={styles["wrap-container"]}>
      <div className={styles["header"]}>
        <div className={styles["header-icon"]}>
          <XrayWhiteIcon />
        </div>
        <h3>Chẩn đoán hình ảnh</h3>
        <h4>Ngày 2 tháng 12 năm 2023</h4>
        <h4>CĐHA2122023-21439294</h4>
        <h4>Bác sĩ kê đơn: Nguyễn Văn Mạnh</h4>
      </div>
      <div className={styles["tab"]}>
        <Tabs items={items} onChange={onChange} />
      </div>
      {!disableClose && (
        <p
          className="cursor-pointer my-[12px] bg-[#F5F6FA] text-[16px] h-[52px] flex justify-center  align-middle items-center rounded-[10px]"
          onClick={() => {
            setOpen && setOpen(false);
          }}
        >
          Thoát
        </p>
      )}
    </div>
  );
};

export default ChanDoanHA;

type RenderTabProps = {
  data: {
    title: string;
    fullName: string;
    address: string;
    doctorIndication: string;
    technicalIndication: string;
    result: string;
    conclusion: string;
    advice?: React.ReactNode;
  };
};

const RenderTab = ({ data }: RenderTabProps) => {
  return (
    <div className={styles["tab-content"]}>
      <h3 className={styles["title"]}>
        <span className="block">PHIẾU KẾT QUẢ</span>
        {data.title}
      </h3>
      <p>
        <span className="font-bold">Họ và tên:</span>{" "}
        <span>{data.fullName}</span>
      </p>
      <p>
        <span className="font-bold">Địa chỉ:</span> {data.address}
      </p>
      <p>
        <span className="font-bold">Bác sĩ chỉ định: </span>
        {data.doctorIndication}
      </p>
      <p>
        <span className="font-bold">Kỹ thuật chỉ định: </span>
        {data.technicalIndication}
      </p>
      <p>
        <span className="font-bold">Kết quả:</span>
      </p>
      <p>{data.result}</p>
      <p>
        <span className="font-bold">Kết Luận:</span>
      </p>
      <p>{data.conclusion}</p>
      <h4 className="font-bold text-[20px] mb-2">
        Lời dặn của bác sĩ chuyên khoa:
      </h4>
      <div>{data?.advice}</div>
    </div>
  );
};
