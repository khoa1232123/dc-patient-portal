"use client";
import { appointmentBg } from "@/assets/images";
import { dataHealthIndexes } from "@/constants/dataExams";
import { useAuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const DetailLayout = ({ children }: Props) => {
  const { logged } = useAuthContext();
  return (
    <div
      className={`detail-layout ${
        !logged ? " -mt-[86px]" : ""
      } bg-[#F5F6FA]`}
    >
      {logged && (
        <div
          className="breakcrumb"
          style={{ backgroundImage: `url(${appointmentBg.src})` }}
        >
          <div className="wrapper">
            <Link href="/">Trang chủ</Link> {">"}{" "}
            Phòng khám Deepcare
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default DetailLayout;
