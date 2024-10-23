"use client";
import BaoCaoYTe from "@/containers/HoSoSk/compoments/BaoCaoYTe/BaoCaoYTe";
import ChanDoanHA from "@/containers/HoSoSk/compoments/ChanDoanHA";
import DonThuoc from "@/containers/HoSoSk/compoments/DonThuoc/DonThuoc";
import KetQuaXn from "@/containers/HoSoSk/compoments/KetQuaXn/KetQuaXn";
import { Menu, Tabs } from "antd";
import React, { useState } from "react";

type Props = {};

const dataTabs = [
  {
    key: "kham-benh",
    label: "Khám bệnh",
    children: <BaoCaoYTe info={{}} />,
  },
  {
    key: "don-thuoc",
    label: "Đơn thuốc",
    children: <DonThuoc info={{}} disableClose={true} />,
  },
  {
    key: "xet-nghiem",
    label: "Xét nghiệm",
    children: <KetQuaXn info={{}} disableClose={true} />,
  },
  {
    key: "cdha",
    label: "Chẩn đoán hình ảnh",
    children: <ChanDoanHA info={{}} disableClose={true} />,
  },
];

const KQKham = (props: Props) => {
  const [items, setItems] = useState<any>(dataTabs);
  const renderKQKham = (value: string) => {
    switch (value) {
      case "kham-benh":
        return <BaoCaoYTe info={{}} />;
      case "don-thuoc":
        return <DonThuoc info={{}} />;
      case "xet-nghiem":
        return <KetQuaXn info={{}} />;
      case "cdha":
        return <ChanDoanHA info={{}} />;
      default:
        return <div>Loading...</div>;
    }
  };
  return (
    <section className="kq-kham">
      <div className="wrapper">
        <h2 className="kq-kham__title">Kết quả khám</h2>

        <Tabs
          className="kq-kham__tabs"
          items={items.map((item: any) => {
            return {
              label: item.label,
              key: item.key,
              children: <div className="kq-kham__content">{item.children}</div>,
            };
          })}
        />
      </div>
    </section>
  );
};

export default KQKham;
