import { logoMini } from "@/assets/images";
import { Logo2SVG } from "@/assets/svg";
import { dataMenuFooter } from "@/constants/dataExams";
import { useAuthContext } from "@/contexts/AuthContext";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

const ClientFooter = ({ className }: Props) => {
  const { logged } = useAuthContext();

  if (!logged) return;

  return (
    <footer className={`client-footer ${className}`}>
      <div className="client-footer__top">
        <div className="wrapper">
          <Row style={{ rowGap: 20 }}>
            <Col span={9} xs={24} lg={9}>
              <div className="client-footer__item">
                <div className="client-footer__logo">
                  <Link href={"#"}>
                    <Logo2SVG width={77} height={60} />
                  </Link>
                </div>
                <p>
                  <span>Địa chỉ: </span> Lô 22 số 35 Lê Văn Thiêm, Thanh Xuân,
                  Hà Nội
                </p>
                <p>
                  <span>Website: </span>{" "}
                  <Link href={"https://deepcare.io"}>deepcare.io</Link>
                </p>
                <p>
                  <span>Email: </span>{" "}
                  <Link href={"mailto:deepcare@gmail.com"}>
                    deepcare@gmail.com
                  </Link>
                </p>
                <p>
                  <span>Hotline: </span>{" "}
                  <Link href={"tel:19001234"}>1900 1234</Link>
                </p>
              </div>
            </Col>
            {dataMenuFooter.map((item) => (
              <Col span={5} key={item.key} xs={24} md={8} lg={5}>
                <h3 className="client-footer__title">{item.title}</h3>
                <ul className="client-footer__menu">
                  {item.menu.map((it) => (
                    <li key={it.key} className="client-footer__menu__item">
                      <Link href={it.link}>{it.label}</Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="client-footer__bottom">
        <Image src={logoMini} alt="logo" width={24} />
        <p>© 2024 - Bản quyền cung cấp bởi Công Ty Cổ Phần Deepcare Việt Nam</p>
      </div>
    </footer>
  );
};

export default ClientFooter;
