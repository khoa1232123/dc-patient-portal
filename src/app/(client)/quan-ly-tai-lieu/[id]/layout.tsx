"use client";
import { appointmentBg } from "@/assets/images";
import { dataDocManagements, dataHealthIndexes } from "@/constants/dataExams";
import { useAuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const DetailLayout = ({ children }: Props) => {
  const { logged } = useAuthContext();
  const { id } = useParams();

  const [breakcrumbText, setBreakcrumbText] = useState("");

  useEffect(() => {
    if (typeof id === "string") {
      setBreakcrumbText(
        dataDocManagements.find((item) => String(item.key) === id)?.name || ""
      );
    }
  }, [id]);

  return (
    <div
      className={`detail-layout ${!logged ? " -mt-[86px]" : ""} bg-[#F5F6FA]`}
    >
      {logged && (
        <div
          className="breakcrumb"
          style={{ backgroundImage: `url(${appointmentBg.src})` }}
        >
          <div className="wrapper">
            <Link href="/">Trang chủ</Link> {">"}{" "}
            <Link href="/quan-ly-tai-lieu">Tài liệu sức khoẻ</Link> {">"}{" "}
            {breakcrumbText}
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default DetailLayout;
