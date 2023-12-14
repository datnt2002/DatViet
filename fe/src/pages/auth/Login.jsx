import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import backgroundImage from "../../assets/imgs/backgr.jpg";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (values) => {
    console.log(values);

    if (values?.username === "admin" && values?.password === "123456") {
      navigate("/admin");
      sessionStorage.setItem("token", "afewawcawcwaefawfawef");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Wrong username or password",
        icon: "error",
        confirmButtonText: "Got it!",
      });
    }
  };
  return (
    <div
      className="flex justify-end bg-cover w-screen min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="self-center mr-8 ml-8 w-full md:w-1/2 lg:w-1/3 bg-white/50 rounded-3xl shadow-lg p-6 backdrop-blur-sm text-center">
        {/* name page */}
        <div>
          {/* <img src={logo} className="h-16 mx-auto" alt="" /> */}
          <h4 className="text-3xl font-dancing font-bold mt-4">
            Chủ Nhân Đất Việt
          </h4>

          <h4 className="text-sm font-bold mt-4">Sign in to your account</h4>
        </div>
        {/* form */}
        <div className="flex mt-4">
          <Form
            className="login-form flex flex-col w-full relative"
            name="normal_login"
            initialValues={{
              remember: false,
            }}
            onFinish={handleLogin}
          >
            <Form.Item name="username">
              <Input
                className="rounded-full p-3 border-black text-black"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                className="rounded-full p-3 border-black text-black"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="basis-full bg-black rounded-full text-white font-bold text-lg w-full pt-2 pb-2 h-fit"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
