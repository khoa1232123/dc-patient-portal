"use client";
import { ClientFooter, ClientHeader } from "@/containers/Layout";
import { Spin } from "antd";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ClientLayout = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Spin spinning={loading} />
      <ClientHeader />
      <main className="h-[100vh]">{children}</main>
    </>
  );
};

export default ClientLayout;
