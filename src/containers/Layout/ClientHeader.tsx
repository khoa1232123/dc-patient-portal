import { avatarImage } from "@/assets/images";
import { LogoSVG, NotificationIcon, PhoneIcon } from "@/assets/svg";
import { dataMenu } from "@/constants/dataExams";
import { Dropdown, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { MenuProps } from "rc-menu";

const { Header } = Layout;
const items: MenuProps["items"] = [
  {
    label: <Link href="https://www.antgroup.com">1st menu item</Link>,
    key: "0",
  },
  {
    label: <Link href="https://www.aliyun.com">2nd menu item</Link>,
    key: "1",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
type Props = {
  className?: string;
  logged?: boolean;
};

const ClientHeader = ({ className = "", logged = false }: Props) => {
  return (
    <Header
      className={`client-header !px-6 ${logged ? "logged" : ""} ${className}`}
    >
      {logged && (
        <div className="client-header__left">
          <div className="client-header__logo">
            <LogoSVG width={143} height={34} />
          </div>
        </div>
      )}
      <div className={`client-header__center`}>
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
        {logged ? (
          <>
            <div className="client-header__btn">
              <button className="base-btn">Tải ứng dụng</button>
            </div>
            <div className="client-header__hotline">
              <span className="client-header__hotline__icon">
                <PhoneIcon />
              </span>
              <div className="client-header__hotline__content">
                <span className="client-header__hotline__text">
                  Hỗ trợ đặt khám
                </span>
                <span className="client-header__hotline__phone">1900 9999</span>
              </div>
            </div>
            <div className="client-header__user">
              <div className="client-header__user__notification">
                <NotificationIcon width={24} height={24} />
                <div className="client-header__user__notification__dot"></div>
              </div>
              <div className="client-header__user__avatar">
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Image
                    src={avatarImage}
                    alt="avatar"
                    width={42}
                    height={42}
                  />
                </Dropdown>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="client-header__hotline">
              <span className="client-header__hotline__icon">
                <PhoneIcon />
              </span>
              <div className="client-header__hotline__content">
                <span className="client-header__hotline__text">
                  Hỗ trợ đặt khám
                </span>
                <span className="client-header__hotline__phone">1900 9999</span>
              </div>
            </div>
            <div className="client-header__btn">
              <button className="base-btn">Đăng nhập</button>
            </div>
          </>
        )}
      </div>
    </Header>
  );
};

export default ClientHeader;
