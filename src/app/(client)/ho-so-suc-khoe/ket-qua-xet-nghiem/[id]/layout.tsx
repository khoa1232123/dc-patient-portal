"use client";
import { appointmentBg } from "@/assets/images";
import { useAuthContext } from "@/contexts/AuthContext";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DetailLayout = ({ children }: Props) => {
  const { logged } = useAuthContext();
  return (
    <div className={`detail-layout ${!logged ? " -mt-[86px]" : ""} bg-[#F5F6FA] min-h-[100vh]`}>
      {logged && (
        <div
          className="breakcrumb"
          style={{ backgroundImage: `url(${appointmentBg.src})` }}
        >
          <div className="wrapper">
            Hồ sơ sức khoẻ {">"} Kết quả xét nghiệm {">"} 11/11/2023
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default DetailLayout;
