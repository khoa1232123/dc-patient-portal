"use client";
import ScrollToTop from "@/components/ScrollToTop";
import VirtualAssistant from "@/components/VirtualAssistant";
import { ClientFooter, ClientHeader } from "@/containers/Layout";
import { AuthProvider } from "@/contexts/AuthContext";
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
      <AuthProvider>
        <Spin spinning={loading}>
          <ClientHeader />
          <main>{children}</main>
          <ClientFooter />
        </Spin>
        <ScrollToTop />
        <VirtualAssistant />
      </AuthProvider>
    </>
  );
};

export default ClientLayout;
