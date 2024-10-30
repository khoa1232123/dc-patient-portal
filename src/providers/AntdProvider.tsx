"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import type { ThemeConfig } from "antd";
import { AuthProvider } from "@/contexts/AuthContext";

const AntdProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const theme: ThemeConfig = {
    token: {
      fontSize: 16,
      colorPrimary: '#2D91F3',
      fontFamily: 'Roboto',
    },
    components: {
      Layout: {
        headerBg: 'transparent',
        bodyBg: '#F2F8FE',
      },
      Tabs: {
        colorPrimary: '#2D91F3',
        margin: 0,
      },
      Table: {
        headerBorderRadius: 10,
        boxShadow: '0px 4px 19.1px 0px #0000000D',
        cellPaddingBlock: 12,
        headerBg: '#fff',
      },
      Menu: {
        colorPrimary: '#2D91F3',
        itemSelectedBg: '#2D91F3',
        itemSelectedColor: '#fff',
        horizontalItemSelectedBg: '#2D91F3',
        horizontalItemBorderRadius: 8,
      },
      DatePicker: {
        colorPrimary: '#2D91F3',
        colorFillSecondary: 'red',
      },
      Button: {
        colorPrimary: '#2D91F3',
      },
      Checkbox: {
        colorPrimary: '#2D91F3',
      },
      Select: {
        fontSize:16,
      },
    },
  }

  return (
    <AntdRegistry>
      <ConfigProvider theme={theme} locale={viVN}>
        <AuthProvider>
        {children}
        </AuthProvider>
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default AntdProvider;
