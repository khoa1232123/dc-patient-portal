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
  const path = usePathname();

  const [breakcrumbText, setBreakcrumbText] = useState("");

  useEffect(() => {
    setBreakcrumbText(
      dataHealthIndexes.find((item) => item.path === path)?.title || ""
    );
  }, [path]);

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
            <Link href="/ho-so-suc-khoe">Hồ sơ sức khoẻ</Link> {">"}{" "}
            <Link href="/ho-so-suc-khoe/chi-so-suc-khoe">Chỉ số sức khoẻ</Link>{" "}
            {">"} {breakcrumbText}
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default DetailLayout;
