import { avatarImage } from "@/assets/images";
import { LogoSVG, NotificationIcon, PhoneIcon } from "@/assets/svg";
import { dataMenu, dataMenu2 } from "@/constants/dataExams";
import { useAuthContext } from "@/contexts/AuthContext";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Dropdown, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MenuProps } from "rc-menu";
import { useEffect, useState } from "react";

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

const ClientHeader = ({ className = "" }: Props) => {
  const route = useRouter();
  const pathname = usePathname();
  const { logged, setLogged } = useAuthContext();
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("/");

  useEffect(() => {
    const dataMenuMain = (logged ? dataMenu2 : dataMenu);
    setSelectedMenu(dataMenuMain.findLast(it => pathname.includes(it.key))?.key || "/");
  }, [pathname])

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header
      className={`client-header !px-6 ${logged ? "logged" : ""} ${className}`}
    >
      {logged && (
        <div className="client-header__left">
          <div className="client-header__logo">
            <Link href={"/"}>
              <LogoSVG width={143} height={34} />
            </Link>
          </div>
        </div>
      )}
      <div className={`client-header__center`}>
        <Menu
          mode="horizontal"
          // defaultSelectedKeys={["1"]}
          selectedKeys={[selectedMenu]}
          onClick={({ key }) => setSelectedMenu(key)}
          // items={logged ? dataMenu2 : dataMenu}
          style={{ flex: 1, minWidth: 0 }}
          className="client-header__menu"
        >
          {(logged ? dataMenu2 : dataMenu).map(item => (
            <Menu.Item key={item.key}>
              <Link href={item?.link}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
      <div className="client-header__right">
        {logged ? (
          <>
            <div className="client-header__btn lg-none">
              <button
                className="base-btn small"
                onClick={() => setLogged(false)}
              >
                Tải ứng dụng
              </button>
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
              <div className="client-header__user__avatar lg-none">
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
            <Button
              type="primary"
              className="client-header__open-drawer shadow-lg"
              onClick={showDrawer}
            >
              <MenuOutlined width={32} height={32} />
            </Button>
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
              <button className="base-btn" onClick={() => setLogged(true)}>
                Đăng nhập
              </button>
            </div>

            <Button
              type="primary"
              className="client-header__open-drawer shadow-lg"
              onClick={showDrawer}
            >
              <MenuOutlined width={32} height={32} />
            </Button>
          </>
        )}
      </div>
      <Drawer onClose={onClose} open={open}>
        <Menu
          mode="vertical"
          defaultSelectedKeys={["1"]}
          items={logged ? dataMenu2 : dataMenu}
          style={{ flex: 1, minWidth: 0 }}
          className="client-header__menu__mobile"
        />
        <div className="client-header__btn">
          <button
            className="base-btn small w-full mt-4"
            onClick={() => setLogged(false)}
          >
            Tải ứng dụng
          </button>
        </div>
      </Drawer>
    </Header>
  );
};

export default ClientHeader;
