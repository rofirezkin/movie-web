"use client";

import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";

type FieldType = {
  username: string;
  password: string;
  remember: boolean;
};

const LoginView = () => {
  const onFinish = (values: FieldType) => {
    console.log("✅ Success:", values);

    // Contoh login logic
    if (values.username === "testing" && values.password === "!Testing123") {
      message.success("Login success!");
      // redirect or save token
    } else {
      message.error("Invalid credentials");
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("❌ Failed:", errorInfo);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <Form<FieldType>
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 6, span: 18 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginView;
