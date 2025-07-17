import React from "react";
import { ProForm, ProFormText, ProFormDigit } from "@ant-design/pro-components";
import type { Employee } from "../interfaces/Employee";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface Props {
  initialValues?: Partial<Employee>;
  onFinish: (values: Omit<Employee, "id">) => Promise<void>;
  submitText?: string;
}

const formItemStyle = { width: 300 };

const EmployeeForm: React.FC<Props> = ({
  initialValues,
  onFinish,
  submitText,
}) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
      <ProForm
        layout="vertical"
        initialValues={initialValues}
        onFinish={onFinish}
        submitter={{
          render: (props, dom) => {
            return (
              <div style={{ display: "flex", gap: "8px" }}>
                {dom}
                <Button onClick={() => navigate("/")}>Cancel</Button>
              </div>
            );
          },
          searchConfig: { submitText: submitText || "Submit" },
          resetButtonProps: { style: { display: "none" } },
        }}
      >
        <ProFormText
          name="name"
          label="Name"
          placeholder="Enter full name"
          rules={[{ required: true, message: "Name is required" }]}
          fieldProps={{ style: formItemStyle }}
        />

        <ProFormText
          name="email"
          label="Email"
          placeholder="Enter email address"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Invalid email address" },
          ]}
          fieldProps={{ style: formItemStyle }}
        />

        <ProFormText
          name="position"
          label="Position"
          placeholder="e.g. Software Engineer"
          rules={[
            { required: true, message: "Position is required" },
            {
              pattern: /^[a-zA-Z\s]{2,30}$/,
              message: "Only letters (2–30 chars) allowed",
            },
          ]}
          fieldProps={{ style: formItemStyle }}
        />

        <ProFormText
          name="department"
          label="Department"
          placeholder="e.g. Engineering"
          rules={[
            { required: true, message: "Department is required" },
            {
              pattern: /^[a-zA-Z]{2,30}$/,
              message: "Only letters (2–30 chars) allowed",
            },
          ]}
          fieldProps={{ style: formItemStyle }}
        />

        <ProFormDigit
          name="age"
          label="Age"
          placeholder="Enter age"
          rules={[{ required: true, message: "Age is required" }]}
          fieldProps={{ style: formItemStyle, min: 18, max: 100 }}
        />
      </ProForm>
    </div>
  );
};

export default EmployeeForm;
