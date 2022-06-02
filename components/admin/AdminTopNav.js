import { useState, Fragment, useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";

import {
  
  AppstoreOutlined,
  SettingOutlined,
  PicCenterOutlined,
} from "@ant-design/icons";
import ToggleTheme from "../ToggleTheme";


const { SubMenu } = Menu;

const TopNav = ({ router }) => {
  const [current, setCurrent] = useState("mail");
  const [currentURL, setCurrentURL] = useState('')

  useEffect(() => {
    process.client && setCurrentURL(window.location.pathname)   
  }, [process.client && window.location.pathname])

  const activeName = (name) => `${currentURL === name && "active"}`

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Fragment>
    
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal"  theme="dark">
      <Menu.Item key="mail" icon={<PicCenterOutlined />}>
        <Link href="/">
          <a className={activeName("/")}>elearning</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="syllabus" icon={<AppstoreOutlined />} style={{ marginLeft: "auto" }}>
        <Link href="/admin/syllabus/syllabus">
          <a className={activeName("/admin/syllabus/syllabus")}>Syllabuses</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="sbooks" icon={<AppstoreOutlined />}>
        <Link href="/admin/learner/learner">
        <a className={activeName("/admin/learner/learner")}>Student Books</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="tguides" icon={<AppstoreOutlined />}>
        <Link href="/admin/guide/guide">
        <a className={activeName("/admin/guide/guide")}>Teacher Guides</a>
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