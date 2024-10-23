"use client"
import {
  CalendarBlueOutlineIcon,
  HeartMedicalIcon,
  HospitalIcon,
  TestTubeWhiteIcon,
  TimeBlueOutlineIcon,
  UserIcon,
} from "@/assets/svg";
import { useRouter } from "next/navigation";
import React from "react";

type MedicalHistoryItem = {
  key: string;
  title: string;
  date: string;
  time: string;
  user: string;
  department: string;
  address: string;
  status: string;
};

type Props = {
  status: string;
  data: MedicalHistoryItem[];
};

const renderStatus = (value: string) => {
  switch (value) {
    case "waiting":
      return <span className="status-pending">Chờ xác nhận</span>;
    case "confirmed":
      return <span className="status-approved">Đã xác nhận</span>;
    case "complete":
      return <span className="status-rejected">Hoàn thành</span>;
    default:
      return <span>{value}</span>;
  }
};

const HistoryContent = ({ status, data = [] }: Props) => {
  const route = useRouter();
  return (
    <div className="medical-history__content">
      <h2 className="medical-history__content__title">
        {renderStatus(status)} ({data.length})
      </h2>
      {data.map((item) => (
        <div className="medical-history__item">
          <div className="medical-history__item__title">
            <div className="medical-history__item__title__icon">
              <TestTubeWhiteIcon className="" width={24} height={24} />
            </div>
            <h4>{item.title}</h4>
          </div>
          <div className="medical-history__item__date">
            <div className="medical-history__item__date__left">
              <CalendarBlueOutlineIcon width={16} height={16} />
              <span>{item.date}</span>
            </div>
            <div className="medical-history__item__date__right">
              <TimeBlueOutlineIcon width={16} height={16} />
              <span>{item.time}</span>
            </div>
          </div>
          <div className="medical-history__item__list">
            <div className="medical-history__item__item">
              <UserIcon width={16} height={16} />
              <span>{item.user}</span>
            </div>
            <div className="medical-history__item__item">
              <HeartMedicalIcon width={16} height={16} />
              <span>{item.department}</span>
            </div>
            <div className="medical-history__item__item">
              <HospitalIcon width={16} height={16} />
              <span>{item.address}</span>
            </div>
          </div>
          <div className="medical-history__item__btn">
            {status === 'complete' ? (
              <button className="btn-result" onClick={() => {
                route.push('/lich-su-kham-chua-benh/ket-qua-kham')
              }}>Xem kết quả</button>
            ) : (

              <button className="btn-cancer">Huỷ</button>
            )}

          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryContent;
