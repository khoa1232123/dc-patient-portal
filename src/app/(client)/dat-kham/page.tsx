"use client";
import { doctor0FullImage, doctor0Image, logoMini } from "@/assets/images";
import Appointment from "@/containers/Appointment";
import { useAuthContext } from "@/contexts/AuthContext";
import { Col, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const QuickAppointmentPage = (props: Props) => {
  const { logged } = useAuthContext();
  return (
    <>
      <section
        className={`appointment-page pb-10 ${logged ? "!pt-[24px]" : ""} px-6`}
      >
        <div className="appointment-page__left__img">
          {!logged && <Image src={doctor0Image} alt="doctor0" />}
        </div>
        <div className="wrapper">
          <Row>
            <Col
              xs={24}
              lg={8}
              hidden={logged}
              style={{ display: logged ? "none" : "flex" }}
            >
              <div className="appointment-page__left">
                <h1 className="appointment-page__left__title">
                  Book local doctor who take your insurance
                </h1>
                <p className="appointment-page__left__desc">
                  Book local doctor who take your insurance
                </p>
              </div>
            </Col>
            <Col span={logged ? 24 : 16} xs={24} lg={logged ? 24 : 16}>
              <div className="appointment-page__right">
                <Appointment />
              </div>
              {!logged && (
                <div className="flex justify-center items-center pt-[24px]">
                  <p className="text-center text-white">
                    <Image
                      src={logoMini}
                      alt="logo"
                      width={24}
                      style={{
                        display: "inline-block",
                        marginRight: "8px",
                        marginBottom: "4px",
                      }}
                    />
                    © 2024 - Bản quyền cung cấp bởi Công Ty Cổ Phần Deepcare
                    Việt Nam
                  </p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default QuickAppointmentPage;
