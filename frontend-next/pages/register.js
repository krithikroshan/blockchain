import React, { useEffect, useCallback, useContext } from "react";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions";
import GoogleLogin from "react-google-login";
import Layout from "../components/Common/Layout";
import { Card, Form, Col, Row, Input, Button, Divider, Typography } from "antd";
import { API_BASE_URL } from "../constants/apiConstants";
import axios from "axios";

const { Link } = Typography;

function Registration() {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    console.log(response);
    axios
      .post("https://www.api.accessapp.io/users/auth/google/", {
        access_token: response.accessToken, // note the differences in key and value variable names
        id_token: response.tokenId,
      })
      .then((res) => {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        dispatch(allActions.userActions.setUser(res.data));
        Router.push("/");
      });
  };

  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    values.password2 = values.password1;
    axios
      .post(`${API_BASE_URL}/users/auth/registration/`, values)
      .then((res) => {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        dispatch(allActions.userActions.setUser(res.data));
        Router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div style={{ paddingTop: 60 }}>
        <h3 style={{ textAlign: "center" }}>Chainsmokers</h3>
        <Card style={{ width: 540, margin: "auto" }}>
          {/* <div style={{ margin: "auto", width: "100%" }}>
            <GoogleLogin
              clientId="57740025555-32jjlcubuplvsu89tfknbtnj0apr2qid.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant="outlined"
                  style={{
                    width: "100%",
                    textTransform: "none",
                    background: "white",
                    height: "40px",
                    marginBottom: 10,
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRF__vDRer9N3lzmW-FJTnaiCi1Vd7TvcHrdcjzU28RHD2kcpRVdZIQhLvZaksbBPpak&usqp=CAU"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "20px",
                    }}
                    alt="google"
                  />
                  Sign up with Google
                </Button>
              )}
            />
          </div>
          <Divider plain>or</Divider> */}
          <Form
            name="basic"
            requiredMark={false}
            size="large"
            autoComplete="off"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input />
            </Form.Item>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="first_name"
                  rules={[
                    { required: true, message: "Please enter your first name" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="last_name"
                  rules={[
                    { required: true, message: "Please enter your last name" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Password"
              name="password1"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            {/* <p style={{ margin: 0, marginTop: 5 }}>
              <Link style={{ textAlign: "left", marginTop: 20 }}>
                Forgot password?
              </Link>
            </p> */}
            <Form.Item>
              <Button
                block
                // type="primary"
                htmlType="submit"
                style={{
                  marginTop: 24,
                  marginBottom: 24,
                  backgroundColor: "#00a690",
                  border: "none",
                  color: "white",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
          <span>
            Have an account? <Link href='/login'>Sign in</Link>
          </span>
        </Card>
      </div>
    </>
  );
}

export default Registration;
