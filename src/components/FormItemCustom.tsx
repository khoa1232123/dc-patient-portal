import { Form, FormItemProps } from "antd";
import React from "react";

type Props = FormItemProps & {
  label?: React.ReactNode;
};

const FormItemCustom: React.FC<Props> = ({
  rules = [],
  label,
  ...restProps
}) => {
  let myLabel = label;

  if (rules.some((rule: any) => rule.required)) {
    myLabel = (
      <>
        {myLabel}
        <span style={{ color: "red", marginLeft: "4px" }}> *</span>
      </>
    );
  }

  return <Form.Item rules={rules} label={myLabel} {...restProps} />;
};

export default FormItemCustom;
