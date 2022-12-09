import ContainerLayout from "../layout/containerLayout";
import Header from "../layout/defaultLayout/index";
import { h2tag, h1tag, ptag } from "../layout/containerLayout/dataContainer";
import "./register.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Form, Input, Typography } from "antd";
import { postUsers } from "../../service/User";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

function Register(props) {
  const [checkConfirm, setCheckConfirm] = useState(false);
  const navigate = useNavigate()
  const schema = yup.object({
    fullName: yup.string().required(""),
    email: yup.string().required("").email(),
    password: yup.string().required(""),
  });
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleConfirm = () => {
    if (checkConfirm === watch("password")) {
      setCheckConfirm(true);
    } else {
      setCheckConfirm(false);
    }
  };
  const onSubmitForm = (data) => {
    postUsers("users", {
      ...data,
    }).then((res) => {
      navigate('/login')
    });
  };

  return (
    <div className="register">
      <Header />
      <ContainerLayout
        title1={h2tag.registerTag}
        title2={h1tag.registerTag}
        title3={ptag.registerTag}
      />
      <div className="form-register">
        <Form onFinish={handleSubmit(onSubmitForm)}>
          <Form.Item>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => {
                return (
                  <Input
                    className="input-register"
                    placeholder="Enter your full name"
                    {...field}
                    status={errors.fullName && "error"}
                  />
                );
              }}
            />

            {errors.fullName && (
              <Text className="text-register" type="danger">
                {errors.fullName.message}
              </Text>
            )}
          </Form.Item>
          <Form.Item>
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <Input
                    className="input-register"
                    placeholder="Enter your email"
                    {...field}
                    status={errors.email && "error"}
                  />
                );
              }}
            />

            {errors.email && (
              <Text className="text-register" type="danger">
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
                    className="input-register"
                    placeholder="Enter password"
                    {...field}
                    status={errors.password && "error"}
                  />
                );
              }}
            />

            {errors.password && (
              <Text className="text-register" type="danger">
                {errors.password.message}
              </Text>
            )}
          </Form.Item>
          <Input
            onBlur={() => handleConfirm()}
            className="input-register"
            placeholder="Confirm Password"
            status={checkConfirm&&"error"}
          />
          <Button htmlType="submit" className="home-button">
            Register
          </Button>
        </Form>
        <p className="sign_register">
          Already have an account ? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
