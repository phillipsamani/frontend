import { useState, Fragment } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  PicCenterOutlined,
  AccountBookOutlined,
  BlockOutlined,
} from "@ant-design/icons";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";
import Head from "next/head";
import Image from 'next/image'
import Router from 'next/router';

const { SubMenu } = Menu;

import { signout, isAuth } from '../actions/auth';

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
      {/* <Menu.Item key="signup" icon={<AppstoreOutlined />}>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="login" icon={<AppstoreOutlined />}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Menu.Item> */}
      
      <Menu.Item key="syllabuses" icon={<AccountBookOutlined />} style={{ marginLeft: "auto" }}>
        <Link href="/syllabuses">
          <a>Syllabuses</a>
        </Link>
        </Menu.Item>
      <Menu.Item key="learners" icon={<BlockOutlined />}>
        <Link href="/learners">
          <a>Student Books</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="guides" icon={<AppstoreOutlined />}>
        <Link href="/guides">
          <a>Teacher Guides</a>
        </Link>
      </Menu.Item>
      

      {isAuth() && isAuth().admin === 1 && (
          <Fragment>
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
              
          </Fragment>
        )}

      {isAuth() && isAuth().student === 1 && (
          <Menu.Item key="learning" icon={<AppstoreOutlined />}  style={{ marginLeft: "auto" }}>
          <Link href="/student/learning">
            <a>My Learning</a>
          </Link>
        </Menu.Item> 
      )}{isAuth() && isAuth().teacher === 1 && (
        <Menu.Item key="teaching" icon={<AppstoreOutlined />} style={{ marginLeft: "auto" }}>
        <Link href="/teacher/teaching">
          <a>My Teaching</a>
        </Link>
      </Menu.Item> 
    )}

      {isAuth() && (
        <Menu.Item key="signout" icon={<AppstoreOutlined />} style={{ marginLeft: "auto" }}>
          <a onClick={() => signout(() => Router.replace(`/`))}>Signout</a>
        </Menu.Item>
      )}
      {!isAuth() && (
        <Menu.Item key="login" icon={<AppstoreOutlined />}  style={{ marginLeft: "auto" }}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Menu.Item>
      )}
      <Menu.Item>
        <ToggleTheme />
      </Menu.Item>
    </Menu>
    </Fragment>
  );
};

export default TopNav;