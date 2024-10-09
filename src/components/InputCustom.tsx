import { Form, FormItemProps, Input } from "antd";
import React from "react";
import FormItemCustom from "./FormItemCustom";

type Props = FormItemProps & {
  rules?: any[];
  label?: React.ReactNode;
  placeholder?: string;
};

const InputCustom = ({
  label,
  name,
  placeholder,
  className = "",
  ...restProps
}: Props) => {
  return (
    <FormItemCustom className={`base-input ${className}`} label={label} name={name} {...restProps}>
      <Input placeholder={placeholder} />
    </FormItemCustom>
  );
};

export default InputCustom;
