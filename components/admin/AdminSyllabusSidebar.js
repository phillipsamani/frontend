// import {
//   AppstoreOutlined,
//   ContainerOutlined,
//   MenuFoldOutlined,
//   PieChartOutlined,
//   DesktopOutlined,
//   MailOutlined,
//   MenuUnfoldOutlined
// } from '@ant-design/icons';
// import { Layout } from "antd";
// import { Button, Menu } from 'antd';
// const { Sider } = Layout;
// import { useState } from 'react';

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }

// const items = [
//   getItem('Syllabus Dashboard', '1', <PieChartOutlined />),
//   getItem('Foreword', 'foreword', <ContainerOutlined />, [
//     getItem('All Forewords', '5'),
//     getItem('Add New Foreword', '6'),
    
//   ]),
//   getItem('Acknowledgement', 'acknowledgement', <AppstoreOutlined />, [
//     getItem('All Acknowledgement', '9'),
//     getItem('Add New Acknowledgement', '10'),
//     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
//   ]),
// ];

// const AdminSyllabusSidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <Sider collapsible>
//       <Menu
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//         theme="dark"
//         inlineCollapsed={collapsed}
//         items={items}
//       />
//     </Sider>
   
//   );
// };

// export default AdminSyllabusSidebar;

import React, { useState } from "react";
import { Menu, Button, Layout } from "antd";
import Link from "next/link"
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  ApartmentOutlined,
  ApiOutlined,
  NodeExpandOutlined,
  ExpandOutlined,
  AlertOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;


const AdminSyllabusSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible width={250}>
      
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Syllabus Dashboard
        </Menu.Item>
        
        <SubMenu key="19" icon={<ApartmentOutlined />} title="Category">
          <Menu.Item key="2">
            <Link href="/admin/syllabus/categories">
              <a>All Categories</a>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="28" icon={<ApartmentOutlined />} title="Subject">
          <Menu.Item key="29">
            <Link href="/admin/syllabus/subjects">
              <a>All Subjects</a>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="17" icon={<ApiOutlined />} title="Year">
          <Menu.Item key="18">All Years</Menu.Item>
          <Menu.Item key="19">Add Year</Menu.Item>
        </SubMenu>
        <SubMenu key="20" icon={<NodeExpandOutlined />} title="Foreword">
          <Menu.Item key="13">
            <Link href="/admin/syllabus/forewords">
              <a>All Forewords</a>
            </Link>
          </Menu.Item>
          
        </SubMenu>
        <SubMenu key="14" icon={<ExpandOutlined />} title="Acknowledgement">
          <Menu.Item key="15">
            <Link href="/admin/syllabus/acknowledgements">
              <a>All Acknowledgements</a>
            </Link>
          </Menu.Item>
          
        </SubMenu>
        <SubMenu key="21" icon={<AlertOutlined />} title="Section 1: Introduction">
          <Menu.Item key="18">
            <Link href="/admin/syllabus/section-1-introductions">
              <a>All Introductions</a>
            </Link>
          </Menu.Item>
          
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default AdminSyllabusSidebar;