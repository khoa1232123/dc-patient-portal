import { gumroadBg } from "@/assets/images";
import Login from "@/containers/Login";
import LoginIntro from "@/containers/Login/LoginIntro";
import { Col, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <section className="login-page" style={{ backgroundImage: `url(${gumroadBg.src})` }}>
      <Row>
        <Col span={15}>
          <div className="login-page__left">
            <LoginIntro />
          </div>
        </Col>
        <Col span={9}>
          <div className="login-page__right">
            <Login />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default LoginPage;
