import { Form, FormItemProps, Input } from "antd";
import React from "react";
import FormItemCustom from "./FormItemCustom";

type Props = FormItemProps & {
  rules?: any[];
  label?: React.ReactNode;
  placeholder?: string;
  addBefore?: React.ReactNode;
  addAfter?: React.ReactNode;
  classInput?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const InputCustom = ({
  label,
  name,
  placeholder,
  className = "",
  addBefore,
  addAfter,
  classInput = "",
  onChange,
  type,
  ...restProps
}: Props) => {
  return (
    <FormItemCustom
      className={`base-input ${addBefore ? "base-input__add-before" : ""} ${
        addAfter ? "base-input__add-after" : ""
      } ${className} ${type}`}
      label={label}
      name={name}
      {...restProps}
    >
      {addBefore && <div className="add-before">{addBefore}</div>}
      <Input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={classInput}
      />
      {addAfter && <div className="add-after">{addAfter}</div>}
    </FormItemCustom>
  );
};

export default InputCustom;
