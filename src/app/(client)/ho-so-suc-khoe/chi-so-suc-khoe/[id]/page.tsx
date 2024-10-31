"use client";
import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import { Col, Row } from "antd";
import CSSKDetail from "@/containers/HoSoSk/compoments/ChiSoSucKhoe/CSSKDetail";
import { dataHealthIndexes } from "@/constants/dataExams";
import { usePathname } from "next/navigation";

type Props = {};

const CanNangPage = (props: Props) => {
  const [item, setItem] = useState<HealthIndexProps>(dataHealthIndexes[0]);
  const pathname = usePathname();

  useEffect(() => {
    dataHealthIndexes.forEach((item) => {
      if (item.path === pathname) {
        setItem(item);
      }
    });
  }, [pathname]);

  return <CSSKDetail item={item} />;
};

export default CanNangPage;
