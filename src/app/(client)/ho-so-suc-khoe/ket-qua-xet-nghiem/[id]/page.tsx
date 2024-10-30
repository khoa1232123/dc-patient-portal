"use client";
import { ButtonCustom } from "@/components";
import { sharedOnCell } from "@/containers/HoSoSk/compoments/KetQuaXn/KetQuaXn";
import { Menu, MenuProps, Space, Table } from "antd";
import { useState } from "react";
import "./styles.scss";
import { ArrowDown, ArrowDownRight } from "@/assets/svg";

type MenuItem = Required<MenuProps>["items"][number];

const dataSource = [
  {
    key: "1",
    name: "Vi sinh",
    age: 32,
    address: "10 Downing Street",
    children: [
      {
        key: "11",
        name: "Vi nấm nhuộm soi",
        result: "(++)",
      },
      {
        key: "12",
        name: "Vi khuẩn nhuộm soi",
        result: "(++)",
      },
      {
        key: "13",
        name: "Trichomonas vaginalis soi tươi",
        result: "Không thấy",
      },
    ],
  },
  {
    key: "2",
    name: "Xét nghiệm sinh hoá",
    age: 32,
    address: "10 Downing Street",
    children: [
      {
        key: "21",
        name: "Glucose",
        unit: "ng/ml",
        result: <span className="text-[red]">0.124</span>,
        reference: "2.0-6.8",
      },
      {
        key: "22",
        name: "HbA1c",
        unit: "ng/ml",
        result: <span className="text-[red]">0.124</span>,
        reference: "2.0-6.8",
      },
      {
        key: "23",
        name: "Glucose",
        unit: "ng/ml",
        result: <span className="text-[red]">0.124</span>,
        reference: "2.0-6.8",
      },
      {
        key: "24",
        name: "Glucose",
        unit: "ng/ml",
        result: <span className="text-blue-500">0.124</span>,
        reference: "2.0-6.8",
      },
    ],
  },
  {
    key: "3",
    name: "Xét nghiệm sinh hoá",
    age: 32,
    address: "10 Downing Street",
    children: [
      {
        key: "31",
        name: "Glucose",
        unit: "ng/ml",
        result: <span className="text-[red]">0.124</span>,
        reference: "2.0-6.8",
      },
      {
        key: "32",
        name: "HbA1c",
        unit: "ng/ml",
        result: <span className="text-[red]">0.124</span>,
        reference: "2.0-6.8",
      },
      {
        key: "33",
        name: "Glucose",
        unit: "ng/ml",
        result: <span className="text-[red]">0.124</span>,
        reference: "2.0-6.8",
      },
      {
        key: "34",
        name: "Glucose",
        unit: "ng/ml",
        result: <span className="text-blue-500">0.124</span>,
        reference: "2.0-6.8",
      },
    ],
  },
];

const items: MenuItem[] = [
  {
    label: "Kết quả xét nghiệm",
    key: "kqxn",
  },
  {
    label: "Kết quả hình ảnh",
    key: "kqha",
  },
];

type Props = {};

const ChiTietKQXN = (props: Props) => {
  const [current, setCurrent] = useState("kqxn");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const columns = [
    {
      title: "Tên xét nghiệm",
      dataIndex: "name",
      key: "name",
      with: 400,
      onCell: (record: any) => {
        if (record?.children) {
          return {
            colSpan: 4,
          };
        }
      },
    },
    {
      title: "Đơn vị",
      dataIndex: "unit",
      key: "unit",
      with: 80,
      onCell: sharedOnCell,
    },
    {
      title: "Kết quả",
      dataIndex: "result",
      key: "result",
      onCell: sharedOnCell,
      with: 200,
    },
    {
      title: "Giá trị tham chiếu",
      dataIndex: "reference",
      key: "reference",
      onCell: sharedOnCell,
      with: 200,
    },
  ];

  return (
    <div className="detail-section">
      <div className="wrapper">
        <h1 className="detail-section__title">Kết quả xét nghiệm</h1>
        <div className="detail-section__content">
          <div className="detail-section__tabs">
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
              className="!bg-transparent"
            />
          </div>
          {/* Tab content */}
          <div className="detail-section__tab-content">
            <div className="kqxn">
              <div className="kqxn__top">
                <div className="kqxn__top__left">
                  <h3 className="kqxn__top__title">11/11/2023</h3>
                  <p className="kqxn__top__content">SID: 111120230</p>
                  <p className="kqxn__top__content">
                    Xét nghiệm máu, nước tiểu
                  </p>
                </div>
                <div className="kqxn__top__right">
                  <ButtonCustom className="kqxn__top__btn">
                    Theo dõi chỉ số
                  </ButtonCustom>
                </div>
              </div>
              <div className="kqxn__content">
                {/* <Space className="w-[100%]"> */}
                <Table
                  className="kqxn__table"
                  dataSource={dataSource}
                  columns={columns as any}
                  pagination={false}
                  scroll={{ x: "max-content" }}
                  expandable={{
                    expandRowByClick: true,
                    defaultExpandAllRows: true,
                    expandIcon: ({ expanded, onExpand, record }) => {
                      if (record?.children) {
                        return expanded ? (
                          <span className={`expanded icon mr-[8px]`}>
                            <ArrowDown />
                          </span>
                        ) : (
                          <span className={`icon mr-[8px]`}>
                            <ArrowDownRight />
                          </span>
                        );
                      } else {
                        return "";
                      }
                    },
                  }}
                  rowClassName={(record) => {
                    if (record?.children) {
                      return "parent";
                    }
                    return "children";
                  }}
                />
                {/* </Space> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietKQXN;
