// // import React from "react";
// // import Footer from "../../../Components/Footer/Footer";
// // import Navbar from "../../../Components/Navbars/Navbar";

// // const Register = () => {
// //   return (
// //     <>
// //       <Navbar />
// //       <h1>Register</h1>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Register;

// import React, { useEffect, useState } from "react";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Button, Form, Input } from "antd";
// const Register = () => {
//   const [form] = Form.useForm();
//   const [clientReady, setClientReady] = useState(false);

//   // To disable submit button at the beginning.
//   useEffect(() => {
//     setClientReady(true);
//   }, []);
//   const onFinish = (values) => {
//     console.log("Finish:", values);
//   };
//   return (
//     <Form
//       form={form}
//       name="horizontal_login"
//       layout="inline"
//       onFinish={onFinish}
//     >
//       <Form.Item
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: "Please input your username!",
//           },
//         ]}
//       >
//         <Input
//           prefix={<UserOutlined className="site-form-item-icon" />}
//           placeholder="Username"
//         />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: "Please input your password!",
//           },
//         ]}
//       >
//         <Input
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Item>
//       <Form.Item shouldUpdate>
//         {() => (
//           <Button
//             type="primary"
//             htmlType="submit"
//             disabled={
//               !clientReady ||
//               !form.isFieldsTouched(true) ||
//               !!form.getFieldsError().filter(({ errors }) => errors.length)
//                 .length
//             }
//           >
//             Log in
//           </Button>
//         )}
//       </Form.Item>
//     </Form>
//   );
// };
// export default Register;

import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const Register = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !clientReady ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default Register;
