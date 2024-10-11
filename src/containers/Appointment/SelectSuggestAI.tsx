import React, { useEffect, useState } from "react";
import SuggestionAI, { InfoSuggestion } from "./SuggestionAI";
import { SelectCustom } from "@/components";
import { FormInstance } from "antd";

type Props = {
  data?: OptionProps[];
  form: FormInstance<any>;
  name?: string;
  isOpenForm?: boolean;
  infoSelect?: {
    label?: string;
    placeholder?: string;
  };
  infoSuggestion?: InfoSuggestion;
  typeSuggest?: "type1" | "type2";
  onChange?: (e: any) => void;
};

const SelectSuggestAI = ({
  data,
  form,
  name,
  isOpenForm = false,
  infoSelect,
  infoSuggestion,
  typeSuggest = "type1",
  onChange,
}: Props) => {
  const [formAI, setFormAI] = useState(false);

  useEffect(() => {
    setFormAI(isOpenForm);
  }, [isOpenForm]);

  if (formAI) {
    return (
      <SuggestionAI
        data={data}
        onClose={() => {
          setFormAI(false);
        }}
        onClick={(e) => {
          form.setFieldValue(name, e);
          setFormAI(false);
          onChange && onChange(e);
        }}
        type={typeSuggest}
        infoSuggestion={infoSuggestion}
      />
    );
  }
  return (
    <SelectCustom
      label={infoSelect?.label || "Select"}
      options={data}
      placeholder={infoSelect?.placeholder || "Chọn"}
      allowClear
      name={name}
      onChange={(e) => {
        onChange && onChange(e);
      }}
    />
  );
};

export default SelectSuggestAI;
