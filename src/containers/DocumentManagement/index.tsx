"use client";
import {
  DocumentBlueIcon,
  FolderColorIcon
} from "@/assets/svg";
import { ButtonCustom, SelectCustom } from "@/components";
import { dataDocManagements } from "@/constants/dataExams";
import { PlusOutlined } from "@ant-design/icons";
import {
  Col,
  Modal,
  Row,
  Table,
  TableColumnsType,
  TableProps
} from "antd";
import { createStyles } from "antd-style";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const useStyle = createStyles(({ css, token }) => {
  // @ts-ignore
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const { Column, ColumnGroup } = Table;

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

const columns: TableColumnsType<DocManagementType> = [
  { title: "Tên tài liệu", dataIndex: "name" },
  { title: "Ngày tải lên", dataIndex: "date" },
  { title: "Được thêm bởi", dataIndex: "author" },
  { title: "Loại", dataIndex: "type" },
];

type Props = {};

const DocumentManagement = (props: Props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const route = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const { styles } = useStyle();

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DocManagementType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <section className="document-management">
      <div className="wrapper">
        <Row className="gap-[24px]">
          <Col span={24}>
            <div className="document-management__header">
              <div className="document-management__header__icon">
                <DocumentBlueIcon width={48} height={48} />
              </div>
              <div className="document-management__header__content">
                <h1>Tài liệu sức khoẻ</h1>
                <p>
                  Để tạo điều kiện thuận lợi cho việc theo dõi chăm sóc của bạn,
                  các chuyên gia chăm sóc sức khoẻ của bạn có thể tham khảo tài
                  liệu
                </p>
              </div>
              <div className="document-management__header__btn">
                <ButtonCustom
                  icon={<PlusOutlined />}
                  onClick={() => setModalOpen(true)}
                >
                  Thêm tài liệu
                </ButtonCustom>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className="document-management__filter">
              <span className="document-management__filter__text">Bộ lọc</span>
              <SelectCustom
                className="document-management__filter__select"
                defaultValue="xet-nghiem"
                options={[
                  {
                    key: "1",
                    label: "Xét nghiệm",
                    value: "xet-nghiem",
                  },
                  {
                    key: "2",
                    label: "Khám bệnh",
                    value: "kham-benh",
                  },
                ]}
              />
              <SelectCustom
                className="document-management__filter__select"
                defaultValue="gan-day-nhat"
                options={[
                  {
                    key: "1",
                    label: "Gần đây nhất",
                    value: "gan-day-nhat",
                  },
                  {
                    key: "2",
                    label: "Xa đây nhất",
                    value: "xa-day-nhat",
                  },
                ]}
              />
            </div>
          </Col>
          <Col span={24}>
            <div className="document-management__table">
              <Table<DocManagementType>
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataDocManagements}
                className={styles.customTable}
                pagination={{
                  showSizeChanger: true,
                }}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: () => {
                      console.log("Click row:", record, rowIndex);
                      route.push(`/quan-ly-tai-lieu/${record.key}`);
                    },
                  };
                }}
                scroll={{ x: "max-content", y: 490 }}
              />
            </div>
          </Col>
        </Row>
      </div>

      <Modal
        centered
        width={470}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={() => {
          return null;
        }}
      >
        <div className="document-management__modal">
          <h2 className="document-management__modal__title">Thêm tài liệu</h2>
          <div className="document-management__modal__content">
            <div className="document-management__modal__content__item">
              <FolderColorIcon width={64} height={64} />
              <p>Tạo thư mục</p>
            </div>
            <label>
              <div className="document-management__modal__content__item">
                <DocumentBlueIcon width={64} height={64} />
                <p>Thêm tài liệu</p>
                <input type="file" hidden />
              </div>
            </label>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default DocumentManagement;
