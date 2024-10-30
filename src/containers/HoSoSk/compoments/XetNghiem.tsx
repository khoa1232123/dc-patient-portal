import React, { useState } from "react";
import styles from "../styles.module.scss";
import { ArrowRight } from "@/assets/svg";
import { useRouter } from "next/navigation";

const dataTime = [
  {
    id: "120",
    time: `11/11/2023`,
    SID: `111120230`,
    des: `Xét nghiệm máu, nước tiểu`,
    key: "1111qwew",
  },
  {
    id: "123",
    time: `11/11/2023`,
    SID: `111120230`,
    des: `Xét nghiệm máu, nước tiểu`,
    key: "2343434",
  },
];

const XetNghiem = () => {
  const [key, setkey] = useState(dataTime[0].key);
  const route = useRouter();

  return (
    <React.Fragment>
      <h3 className="font-[600]  text-[28px] mb-[24px]">Xét nghiệm</h3>
      <div className={styles["time-line"]}>
        <div className={styles["list-time"]}>
          {dataTime.map((obj, index) => {
            return (
              <div
                style={
                  obj.key == key
                    ? {
                        top: (index + 1) * 100,
                      }
                    : {}
                }
                className={`${styles["time"]} ${
                  obj.key == key ? styles["active"] : ""
                }`}
              >
                <div className={styles["time-line-header"]}>{obj.time}</div>

                <div
                  className={styles["time-item"]}
                  onClick={() => {
                    setkey(obj.key)
                    route.push(`/ho-so-suc-khoe/ket-qua-xet-nghiem/${obj.id}`)
                  }}
                >
                  <div>
                    <div className={styles["item-time"]}>{obj.time}</div>
                    <div className={styles["item-sid"]}>
                      SID: <span>{obj.SID}</span>
                    </div>
                    <div className={styles["item-des"]}>{obj.des}</div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className={styles["item-kq"]}>Xem kết quả</span>
                    <span>
                      <ArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default XetNghiem;
