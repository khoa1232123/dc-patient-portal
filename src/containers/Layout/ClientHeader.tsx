import React from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { PhoneIcon } from "@/assets/svg";

const { Header } = Layout;

const dataMenu = [
  {
    key: 1,
    label: "Đặt khám",
  },
  {
    key: 2,
    label: "Hồ sơ sức khoẻ",
  },
  {
    key: 3,
    label: "Hỏi đáp y tế",
  },
];

type Props = {};

const ClientHeader = (props: Props) => {
  return (
    <Header className="client-header !px-6">
      <div className="client-header__left">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={dataMenu}
          style={{ flex: 1, minWidth: 0 }}
          className="client-header__menu"
        />
      </div>
      <div className="client-header__right">
        <div className="client-header__hotline">
          <span className="client-header__hotline__icon">
            <PhoneIcon />
          </span>
          <div className="client-header__hotline__content">
            <span className="client-header__hotline__text">Hỗ trợ đặt khám</span>
            <span className="client-header__hotline__phone">1900 9999</span>
          </div>
        </div>
        <div className="client-header__btn">
          <button className="base-btn">Đăng nhập</button>
        </div>
      </div>
    </Header>
  );
};

export default ClientHeader;
