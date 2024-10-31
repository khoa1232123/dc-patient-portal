import { ButtonCustom } from "@/components";
import { Line } from "@ant-design/charts";
import { PlusOutlined } from "@ant-design/icons";
import { Col, Menu, MenuProps, Row } from "antd";
import Image from "next/image";

type Props = {
  item: HealthIndexProps;
};

const CSSKDetail = ({ item }: Props) => {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];

  const config = {
    data,
    xField: "year",
    yField: "value",
  };

  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      key: "1",
      label: "Ngày",
    },
    {
      key: "2",
      label: "Tuần",
    },
    {
      key: "3",
      label: "Tháng",
    },
    {
      key: "4",
      label: "6 Tháng",
    },
    {
      key: "5",
      label: "Năm",
    },
  ];

  return (
    <div className="cssk-detail">
      <div className="wrapper">
        <Row gutter={20}>
          <Col span={24}>
            <div className="cssk-detail__header">
              <h1 className="cssk-detail__title">{item.title}</h1>
              <div className="cssk-detail__right">
                <div className="cssk-detail__filter">
                  <Menu mode="horizontal" items={items} />
                </div>
                <ButtonCustom
                  icon={<PlusOutlined />}
                  className="cssk-detail__btn"
                >
                  Thêm dữ liệu
                </ButtonCustom>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={8}>
            <div className="cssk-detail__box">
              <div className="cssk-detail__box__icon">
                <item.icon fill={"white"} width={48} height={48} />
              </div>
              <div className="cssk-detail__box__text">
                <h3 className="cssk-detail__box__title">Trung bình</h3>
                <p className="cssk-detail__box__desc">
                  3 thg 7 - 31 thg 12, 2023
                </p>
              </div>
              <p className="cssk-detail__box__box flex justify-center items-center gap-2">
                <span className="cssk-detail__box__value">
                  {(
                    data.reduce((a, b) => {
                      return a + b.value;
                    }, 0) / data.length
                  ).toFixed(1)}
                </span>
                <span className="cssk-detail__box__unit">{item.unit}</span>
              </p>
              <div className="cssk-detail__box__last">
                <p>Mới nhất: {data[data.length - 1].year}</p>
                <span className="font-semibold">
                  {data[data.length - 1].value}
                  {item.unit}
                </span>
              </div>
            </div>
          </Col>
          <Col span={16}>
            <div className="cssk-detail__chart">
              <Line {...config} height={250} />
            </div>
          </Col>
        </Row>
        {item.moreData && (
          <>
            <Row gutter={20}>
              <Col span={24}>
                <h2 className="cssk-detail__title mt-[40px]">
                  {item.moreData.title}
                </h2>
                <div
                  className="cssk-detail__box-desc"
                  dangerouslySetInnerHTML={{ __html: item.moreData.desc }}
                ></div>
              </Col>
            </Row>
            {item.moreData.news && item.moreData.news.length > 0 && (
              <div className="cssk-detail__news">
                <Row gutter={20}>
                  {item.moreData.news.map((it) => {
                    return (
                      <Col span={8} key={it.title}>
                        <div className="cssk-detail__news__item">
                          <Image src={it.image} alt={it.title} />
                          <h3 className="cssk-detail__news__title">
                            {it.title}
                          </h3>
                          <p className="cssk-detail__news__desc">{it.desc}</p>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CSSKDetail;
