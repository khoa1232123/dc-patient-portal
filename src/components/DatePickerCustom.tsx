import { DatePicker, FormItemProps } from "antd";
import React, { DetailedHTMLProps } from "react";
import FormItemCustom from "./FormItemCustom";
import { CalendarBlueIcon } from "@/assets/svg";

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

const DatePickerCustom = ({ label, placeholder, name, className = "", ...props }: Props) => {
  return (
    <FormItemCustom label={label} name={name} className={`base-datepicker ${className}`} {...props}>
      <DatePicker
        placeholder={placeholder || "DD/MM/YYYY"}
        format="DD/MM/YYYY"
        suffixIcon={<CalendarBlueIcon />}
        className="w-full h-[48px] !bg-[#f5f6fa] !border-[#e5e9fb] !rounded-[10px]"
      />
    </FormItemCustom>
  );
};

export default DatePickerCustom;
