"use client";
import { ButtonCustom } from "@/components";
import PDFViewer from "@/components/PDFViewer";
import { dataDocManagements } from "@/constants/dataExams";
import { DownloadOutlined, EditOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

const DetailDocPage = (props: Props) => {
  const [document, setDocument] = useState<DocManagementType>();

  const { id } = useParams();

  useEffect(() => {
    if (typeof id === "string") {
      setDocument(
        dataDocManagements.find((item) => String(item.key) === id) || undefined
      );
    }
  }, [id]);

  return (
    <>
      <section className="doc-detail">
        <div className="wrapper">
          <Row gutter={20}>
            <Col span={24}>
              <h1 className="doc-detail__title">
                Giấy chứng nhận sàng lọc Covid
              </h1>
            </Col>
            <Col span={8}>
              <div className="doc-detail__content">
                <h2>Chi tiết tài liệu</h2>
                <p>
                  Ngày lập tài liệu: <span>{document?.date}</span>
                </p>
                <p>
                  Được thêm bởi: <span>{document?.author}</span>
                </p>
                <p>
                  Loại tài liệu:
                  <span>{document?.type}</span>
                </p>

                <ButtonCustom
                  variant="outline"
                  className="doc-detail__content__btn-edit"
                  icon={<EditOutlined color="#2F75FE" />}
                >
                  Chỉnh sửa chi tiết
                </ButtonCustom>

                <ButtonCustom icon={<DownloadOutlined />} className="w-full">
                  Tải xuống
                </ButtonCustom>
              </div>
            </Col>
            <Col span={16}>
              {document?.file && <PDFViewer fileUrl={document?.file || ""} />}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default DetailDocPage;
