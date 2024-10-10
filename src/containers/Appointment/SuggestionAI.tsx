import { AIColorIcon, SearchBlueIcon } from "@/assets/svg";
import { InputCustom, SelectCustom } from "@/components";
import { dataMedicalSpecialties } from "@/constants/dataExams";
import Image from "next/image";
import React, { useState } from "react";

export type InfoSuggestion = {
  title?: string;
  content?: string;
  placeholderSearch?: string;
};

type Props = {
  data?: OptionProps[];
  infoSuggestion?: InfoSuggestion;
  onClick?: (e: any) => void;
  onClose?: () => void;
  type?: "type1" | "type2";
};

const SuggestionAI = ({
  data = [],
  infoSuggestion,
  onClick,
  onClose,
  type,
}: Props) => {
  const [dataShow, setDataShow] = useState<OptionProps[]>(data.slice(0, 3));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataShow(
      data
        .filter((item) =>
          item.label.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .slice(0, 3)
    );
  };

  return (
    <div className="suggestion-ai__wrapper">
      <h4 className="suggestion-ai__title">
        {infoSuggestion?.title || "Gợi ý"}
      </h4>
      <div className={`suggestion-ai ${type === "type2" ? "type2" : "type1"}`}>
        <div className="suggestion-ai__top">
          <div className="flex gap-2 flex-1">
            <div className="suggestion-ai__icon">
              <AIColorIcon width={20} height={20} />
            </div>
            <div className="suggestion-ai__content">
              {infoSuggestion?.content || "Dưới dây là một số gợi ý"}
            </div>
          </div>
          <div className="suggestion-ai__close" onClick={onClose}>
            Bỏ qua
          </div>
        </div>
        <div className="suggestion-ai__center">
          <InputCustom
            addBefore={<SearchBlueIcon width={24} height={24} />}
            placeholder={infoSuggestion?.placeholderSearch || "Tìm kiếm"}
            classInput="!bg-white rounded-[16px]"
            onChange={handleChange}
          />
          <div className="suggestion-ai__list">
            {dataShow.map((item) => (
              <div
                key={item.value}
                className="suggestion-ai__item"
                onClick={() => onClick && onClick(item.value)}
              >
                {item.icon && (
                  <item.icon
                    width={24}
                    height={24}
                    className="suggestion-ai__item__icon"
                  />
                )}
                {item.image && (
                  <Image
                    src={item.image}
                    className="suggestion-ai__item__image"
                    width={60}
                    height={60}
                    alt="image"
                  />
                )}
                <div className="suggestion-ai__item__content">
                  <div className="suggestion-ai__item__label">{item.label}</div>
                  <div className="suggestion-ai__item__department">
                    {item.departmentLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {type === "type2" && (
          <div className="suggestion-ai__bottom" onClick={onClose}>
            Tôi chưa rõ chuyên khoa phù hợp
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestionAI;
