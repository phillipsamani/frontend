import { useState,  useEffect, Fragment } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import {
  AppstoreOutlined,
  ContainerOutlined,
  CameraOutlined,
  PieChartOutlined,
  BookOutlined,
  CarryOutOutlined,
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
  getItem('All Learner Books', '1', <PieChartOutlined />),
  
  getItem('Year 1 LBs', 'sub1', <CarryOutOutlined />, [
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    
  ]),
  getItem('Year 2 LBs', 'sub2', <AppstoreOutlined />, [
    getItem('Option 4', '4'),
    getItem('Option 5', '5'),
    
  ]),
  getItem('Year 3 LBs', 'sub3', <MenuUnfoldOutlined />, [
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
   
  ]),
  getItem('Year 4 LBs', 'sub4', <BookOutlined />, [
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
   
  ]),
  getItem('Year 5 LBs', 'sub5', <ContainerOutlined />, [
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
   
  ]),
  getItem('Year 6 LBs', 'sub6', <CameraOutlined />, [
    getItem('Option 12', '12'),
    getItem('Option 13', '13'),
   
  ]),
];

const LearnersSidebar = () => {
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
    <Fragment>
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

    </Fragment>
   
  );
};

export default LearnersSidebar;