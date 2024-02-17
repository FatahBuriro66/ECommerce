import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, message } from "antd";
import SocialLoginButton from "../../../Components/button/SocialLoginButton";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";

function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  // const onFinish = async (data) => {
  //   try {
  //     await setPersistence(auth, browserSessionPersistence);

  //     const response = await signInWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password
  //     );
  //     messageApi.open({
  //       type: "success",
  //       content: "login successful",
  //     });

  //     setTimeout(() => navigate("/"), 3000);
  //   } catch (error) {
  //     messageApi.open({
  //       type: "error",
  //       content: error?.message || "something went wrong",
  //     });
  //   }
  // };

  const onFinish = async (data) => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (response && response.user) {
        const userRef = doc(db, "users", response.user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          if (docSnap.data().isAdmin) {
            messageApi.open({
              type: "success",
              content: "Login successful as an admin",
            });
            setTimeout(() => navigate("/admin"), 3000);
          } else {
            messageApi.open({
              type: "success",
              content: "Login successful",
            });
            setTimeout(() => navigate("/"), 3000);
          }
        } else {
          messageApi.open({
            type: "error",
            content: "No such user found. Please contact the administrator.",
          });
        }
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error?.message || "something went wrong",
      });
    }
  };

  return (
    <div className="login-main min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {contextHolder}
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </Form.Item>
          </div>

          <div>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </Button>
          </div>
        </Form>
        <Divider />
        <SocialLoginButton provider="google" />

        <p className="text-center">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
