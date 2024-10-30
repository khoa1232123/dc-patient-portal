import { appointmentBg } from "@/assets/images";
import KQKham from "@/containers/LichSuKCB/KQKham";
import Link from "next/link";
import React from "react";

type Props = {};

const KQKhamPage = (props: Props) => {
  return (
    <div>
      <div
        className="breakcrumb"
        style={{ backgroundImage: `url(${appointmentBg.src})` }}
      >
        <div className="wrapper">
          <Link href="/">Trang chủ</Link> {"> "}
          <Link href="/lich-su-kham-chua-benh">
            Lịch sử khám chữa bệnh
          </Link>{" "}
          {"> "}
          Kết quả khám
        </div>
      </div>
      <KQKham />
    </div>
  );
};

export default KQKhamPage;
