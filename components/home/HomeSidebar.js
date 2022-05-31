import { useState,  useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import {
  AppstoreOutlined,
  ContainerOutlined,
  
  PieChartOutlined,
 
  MailOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout } from "antd";
import { Menu } from 'antd';
import Link from "next/link";
const { Sider } = Layout;

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Home', '1', <PieChartOutlined />),
  
  getItem('PPY Syllabus', '3', <ContainerOutlined />),
  getItem('Primary Syllabuses', 'sub1', <MailOutlined />, [
    getItem(<Link href="/syllabus/[slug]" as="/syllabus/primary-science-syllabus" ><a>Science Syllabus</a></Link>, '5'),
    getItem(<Link href="/syllabus/[slug]" as="/syllabus/primary-social-studies-syllabus" ><a>Social Studies Syllabus</a></Link>, '6'),
    
  ]),
  getItem('Secondary Syllabuses', 'sub2', <AppstoreOutlined />, [
    
    getItem('Option 10', '10'),
    
  ]),
  getItem('Senior Secondary Syllabuses', 'sub3', <MenuUnfoldOutlined />, [
    getItem('Option 13', '13'),
    getItem('Option 13', '13'),
   
  ]),
];

const HomeSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  // hooks
  const onlyWidth = useWindowWidth();

  useEffect(() => {
    process.client && setCurrent(window.location.pathname);
  }, [process.client && window.location.pathname]);

  useEffect(() => {
    if (onlyWidth < 800) {
      setCollapsed(true);
    } else if (onlyWidth > 800) {
      setCollapsed(false);
    }
  }, [onlyWidth < 800]);

  const activeName = (name) => `${current === name && "active"}`;
  

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
      <Menu
        // defaultSelectedKeys={['1']}
        defaultOpenKeys={['']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </Sider>
   
  );
};

export default HomeSidebar;