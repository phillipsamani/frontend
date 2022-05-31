import { useState, Fragment } from "react";
import { Menu } from "antd";
import {
  
  AppstoreOutlined,
  SettingOutlined,
  PicCenterOutlined,
} from "@ant-design/icons";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";
import Head from "next/head";
import Image from 'next/image'

const { SubMenu } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Fragment>
      <Head>
        <Fragment>
        <link rel="stylesheet" href="/styles/globals.css" />
        <link rel="stylesheet" href="/styles/style.css" />
        </Fragment>
      </Head>
    <div>
        <div className="logoHead">
          <div><Image src="/coat-of-arm.png" alt="logo" height={100} width={100}/></div>
        </div>
        <div className="logoText"><p>Ministry of Education and Human Resource Development</p></div>
    </div>
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
      <Menu.Item key="mail" icon={<PicCenterOutlined />}>
        <Link href="/">
          <a>elearning</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="signup" icon={<AppstoreOutlined />}>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="signin" icon={<AppstoreOutlined />}>
        <Link href="/signin">
          <a>Login</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="signout" icon={<AppstoreOutlined />}>
        <Link href="/signout">
          <a>Signout</a>
        </Link>
      </Menu.Item>
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Admin"
        style={{ marginLeft: "auto" }}
      >
        <Menu.ItemGroup title="Management">
          <Menu.Item key="setting:2">
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="teaching" icon={<AppstoreOutlined />}>
        <Link href="/teacher/teaching">
          <a>My Teaching</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="learning" icon={<AppstoreOutlined />}>
        <Link href="/student/learning">
          <a>My Learning</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <ToggleTheme />
      </Menu.Item>
    </Menu>
    </Fragment>
  );
};

export default TopNav;