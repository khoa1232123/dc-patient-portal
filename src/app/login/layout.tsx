"use client";
import { ClientFooter, ClientHeader } from "@/containers/Layout";
import { Spin } from "antd";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const AppointmentLayout = ({ children }: Props) => {
  return (
    <>
    <ClientHeader />
    <div className="-mt-[86px]"> 
      {children}
    </div>
    </>
  );
};

export default AppointmentLayout;
