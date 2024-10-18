import { dataHealthIndexes } from "@/constants/dataExams";

type Props = {};

const ChiSoSucKhoe = (props: Props) => {
  return (
    <div className="health-index">
      <h2 className="health-index__title">Chỉ số sức khoẻ</h2>
      <div className="health-index__list">
        {dataHealthIndexes.map((item) => (
          <div key={item.key} className="health-index__item">
            <div className="health-index__item__icon">
              <item.icon width={48} height={48} />
            </div>
            <div className="health-index__item__text">
              <h4>{item.title}</h4>
              <p className="health-index__item__text--1">
                <span className="health-index__item__value">{item.value}</span>
                <span className="health-index__item__unit">{item.unit}</span>
              </p>
              <p>{item.desc}</p>
              <button className="health-index__item__btn">Thêm dữ liệu</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChiSoSucKhoe;
