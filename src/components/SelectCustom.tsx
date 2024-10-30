import { FormItemProps, Input, Select } from "antd";
import React from "react";
import FormItemCustom from "./FormItemCustom";
import { BaseOptionType } from "antd/es/select";
import { RawValueType } from "rc-select/lib/Select";

export interface FlattenOptionData<OptionType> {
  label?: React.ReactNode;
  data: OptionType;
  key: React.Key;
  value?: RawValueType;
  groupOption?: boolean;
  group?: boolean;
}

type Props = FormItemProps & {
  rules?: any[];
  label?: React.ReactNode;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  options?: OptionProps[];
  optionRender?: (
    oriOption: FlattenOptionData<BaseOptionType>,
    info: {
      index: number;
    }
  ) => React.ReactNode;
  allowClear?: boolean;
  variant?: "outlined" | "borderless" | "filled";
  onChange?: (e: string | number) => void;
};

const SelectCustom = ({
  label,
  name,
  placeholder,
  className = "",
  value,
  defaultValue,
  options,
  optionRender,
  allowClear = false,
  variant,
  onChange,
  ...restProps
}: Props) => {
  return (
    <FormItemCustom
      className={`base-select ${className}`}
      label={label}
      name={name}
      initialValue={value}
      {...restProps}
    >
      <Select
        showSearch
        defaultValue={defaultValue}
        value={value}
        style={{ width: "100%" }}
        allowClear={allowClear}
        options={options}
        placeholder={placeholder}
        optionRender={optionRender}
        variant={variant}
        onChange={onChange}
        autoClearSearchValue
        optionFilterProp="label"
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
      />
    </FormItemCustom>
  );
};

export default SelectCustom;
