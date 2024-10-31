"use client";
import { dataHealthIndexes } from "@/constants/dataExams";
import { Modal } from "antd";
import { useState } from "react";
import HealthModal from "./HealthModal";
import Link from "next/link";

type Props = {};

const ChiSoSucKhoe = (props: Props) => {
  const [modalOpen, setModalOpen] = useState<{ open: boolean; item?: HealthIndexProps }>({
    open: false,
  });

  return (
    <div className="health-index">
      <h2 className="health-index__title">Chỉ số sức khoẻ</h2>
      <div className="health-index__list">
        {dataHealthIndexes.map((item) => (
          <div key={item.key} className="health-index__item">
            <div className="health-index__item__icon">
              <item.icon fill={item.colorIcon} width={48} height={48} />
            </div>
            <div className="health-index__item__text">
              <Link href={item.path}>
              <h4>{item.title}</h4>
              </Link>
              <p className="health-index__item__text--1">
                <span className="health-index__item__value">{item.value}</span>
                <span className="health-index__item__unit">{item.unit}</span>
              </p>
              <p>{item.desc}</p>
              <button
                onClick={() => setModalOpen({ open: true, item: item })}
                className="health-index__item__btn"
              >
                Thêm dữ liệu
              </button>
            </div>
          </div>
        ))}
      </div>
      <HealthModal
        open={modalOpen.open}
        item={modalOpen.item}
        onClose={() => setModalOpen({ open: false })}
      />
    </div>
  );
};

export default ChiSoSucKhoe;
