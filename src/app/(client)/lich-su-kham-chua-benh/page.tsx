import { appointmentBg } from "@/assets/images";
import LichSuKCB from "@/containers/LichSuKCB";
import Link from "next/link";
import React from "react";

type Props = {};

const LichSuKCBPage = (props: Props) => {
  return (
    <div>
      <div
        className="breakcrumb"
        style={{ backgroundImage: `url(${appointmentBg.src})` }}
      >
        <div className="wrapper">
          <Link href="/">Trang chủ</Link> {"> "}
          Lịch sử khám chữa bệnh
        </div>
      </div>
      <LichSuKCB />
    </div>
  );
};

export default LichSuKCBPage;
