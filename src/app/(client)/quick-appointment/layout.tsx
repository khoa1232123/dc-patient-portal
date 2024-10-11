"use client";
import { appointmentBg } from "@/assets/images";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppointmentLayout = ({ children }: Props) => {
  return (
    <div className="appointment-layout -mt-[86px]" style={{ backgroundImage: `url(${appointmentBg.src})` }}> 
      {children}
    </div>
  );
};

export default AppointmentLayout;
