import { ArrowDown, ArrowDownRight, XetNghiem } from "@/assets/svg";
import { Table } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";

export const sharedOnCell = (record: any, index: any) => {
  if (record?.children?.length > 0) {
    return {
      colSpan: 0,
    };
  }
};

type Props = { 
  info: any; 
  setOpen?: any; 
  disableClose?: boolean 
};

const KetQuaXn = ({ info, setOpen, disableClose = false }: Props) => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      children: [
        {
          key: "22",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "23",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "24",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
      ],
    },
    {
      key: "11",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      children: [
        {
          key: "212",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "213",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "214",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
      ],
    },
  ];

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
      dataIndex: "age",
      key: "age",
      with: 80,
      onCell: sharedOnCell,
    },
    {
      title: "Kết quả",
      dataIndex: "address",
      key: "address",
      onCell: sharedOnCell,
      with: 200,
    },
    {
      title: "Kết quả",
      dataIndex: "address",
      key: "address",
      onCell: sharedOnCell,
      with: 200,
    },
  ];

  return (
    <div className={styles["wrap-container"]}>
      <div className={styles["header"]}>
        <div className={styles["header-icon"]}>
          <XetNghiem />
        </div>
        <h3>Kết quả xét nghiệm</h3>
        <h4>Ngày 2 tháng 12 năm 2023</h4>
        <h4>XN2122023-21439294</h4>
      </div>
      <div className={styles["wrap-table"]}>
        <Table
          // scroll={{ x: columns.reduce(
          //   (accumulator:any, currentValue:any) => accumulator?.with + currentValue,
          //   0,
          // ) }}
          scroll={{ x: 1000 }}
          dataSource={dataSource}
          columns={columns as any}
          pagination={false}
          expandable={{
            expandRowByClick: true,
            expandIcon: ({ expanded, onExpand, record }) => {
              if (record?.children) {
                return expanded ? (
                  <span
                    className={`${styles["expanded"]} ${styles["icon"]} mr-[8px]`}
                  >
                    <ArrowDown />
                  </span>
                ) : (
                  <span className={`${styles["icon"]} mr-[8px]`}>
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
              return styles["parent"];
            }
            return styles["children"];
          }}
        />
      </div>
      {!disableClose && (
        <p
          className="cursor-pointer my-[12px] bg-[#F5F6FA] text-[16px] h-[52px] flex justify-center  align-middle items-center"
          onClick={() => {
            setOpen && setOpen(false);
          }}
        >
          Thoát
        </p>
      )}
    </div>
  );
};

export default KetQuaXn;
