import React from "react";
import ContainerLayout from "../layout/containerLayout";
import { h2tag, h1tag, ptag } from "../layout/containerLayout/dataContainer";
import Header from "../layout/defaultLayout";
import "./login.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

function Login(props) {
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup.string().required("").email(),
    password: yup.string().required(""),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmitForm = (data) => {
    navigate("/dash");
  };
  return (
    <div className="login">
      <Header />
      <ContainerLayout
        title1={h2tag.loginTag}
        title2={h1tag.loginTag}
        title3={ptag.loginTag}
      />
      <div className="form-login">
        <Form onFinish={handleSubmit(onSubmitForm)}>
          <Form.Item>
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <Input
                    className="input-login"
                    placeholder="Enter your email"
                    {...field}
                    status={errors.email && "error"}
                  />
                );
              }}
            />
            {errors.email && (
              <Text className="text-login" type="danger">
                {errors.email.message}
              </Text>
            )}
          </Form.Item>
          <Form.Item>
            <Controller
              name="password"
              control={control}
              render={({ field }) => {
                return (
                  <Input
                    className="input-login"
                    placeholder="Enter your password"
                    {...field}
                    status={errors.password && "error"}
                  />
                );
              }}
            />
            {errors.password && (
              <Text className="text-login" type="danger">
                {errors.password.message}
              </Text>
            )}
          </Form.Item>
          <Button htmlType="submit" className="home-button">
            Sign In
          </Button>
        </Form>
        <p className="sign_register">
          Don’t have an account ?<Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
