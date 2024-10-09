import { logoMini } from "@/assets/images";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

const ClientFooter = ({className}: Props) => {
  return (
    <footer className={`client-footer ${className}`}>
      <Image src={logoMini} alt="logo" width={24} />
      <p>© 2023 - Bản quyền cung cấp bởi Công Ty Cổ Phần Deepcare Việt Nam</p>
    </footer>
  );
};

export default ClientFooter;
