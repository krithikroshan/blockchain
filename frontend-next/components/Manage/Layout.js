import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  CheckCircleOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function ManageLayout(props) {
  const router = useRouter();

  return (
    <Layout>
      <Header
        className="header"
        style={{ position: "fixed", zIndex: 100, width: "100%" }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Events</Menu.Item>
          <Menu.Item key="2">Orders</Menu.Item>
          <Menu.Item key="3">Marketing</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider
          width={250}
          style={{
            backgroundColor: "#f6f9fb",
            border: "1px solid #dde2e9",
            position: "fixed",
            left: 0,
            top: 64,
          }}
          className="site-layout-background"
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[props.defaultKey]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100vh", borderRight: 0 }}
          >
            <Menu.Item
              icon={<CheckCircleOutlined />}
              key="1"
              onClick={() =>
                router.push(`/manage/events/${props.id}/basicinfo`)
              }
            >
              Basic Info
            </Menu.Item>
            <Menu.Item
              icon={<CheckCircleOutlined />}
              key="2"
              onClick={() => router.push(`/manage/events/${props.id}/details`)}
            >
              Details
            </Menu.Item>
            <Menu.Item
              icon={<CheckCircleOutlined />}
              key="3"
              onClick={() => router.push(`/manage/events/${props.id}/tickets`)}
            >
              Tickets
            </Menu.Item>
            <Menu.Item
              icon={<CheckCircleOutlined />}
              key="4"
              onClick={() =>
                router.push(`/manage/events/${props.id}/basicinfo`)
              }
            >
              Publish
            </Menu.Item>
            <hr style={{ color: "#d2d2d7" }} />
            <Menu.Item key="5" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Payment">
              <Menu.Item key="6">Payment Options</Menu.Item>
              <Menu.Item key="7">Payout Method</Menu.Item>
              <Menu.Item key="8">Refund Policy</Menu.Item>
              <Menu.Item key="9">Tax</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<UserOutlined />}
              title="Manage Attendees"
            >
              <Menu.Item key="10">Order</Menu.Item>
              <Menu.Item key="11">Add Attendees</Menu.Item>
              <Menu.Item key="12">Attendee List</Menu.Item>
              <Menu.Item key="13">Check-in</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px", backgroundColor: "#fff" }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              marginTop: 64,
              marginLeft: 250,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default ManageLayout;
