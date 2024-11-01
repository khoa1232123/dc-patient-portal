"use client";
import ScrollToTop from "@/components/ScrollToTop";
import VirtualAssistant from "@/components/VirtualAssistant";
import Home from "@/containers/Home";
import { ClientFooter, ClientHeader } from "@/containers/Layout";
import { Spin } from "antd";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Spin spinning={loading}>
      <ClientHeader logged />
      <Home />
      <ClientFooter />
      <ScrollToTop />
      <VirtualAssistant />
    </Spin>
  );
}
