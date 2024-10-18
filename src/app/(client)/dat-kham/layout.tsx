"use client";
import { appointmentBg } from "@/assets/images";
import { useAuthContext } from "@/contexts/AuthContext";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppointmentLayout = ({ children }: Props) => {
  const { logged } = useAuthContext();
  return (
    <div
      className={`appointment-layout ${!logged ? ' -mt-[86px]' : ''}`}
      style={{ backgroundImage: `url(${appointmentBg.src})` }}
    >
      {logged && (
        <div className="breakcrumb">
          <div className="wrapper">Trang chủ &gt; Đặt khám nhanh</div>
        </div>
      )}
      {children}
    </div>
  );
};

export default AppointmentLayout;
