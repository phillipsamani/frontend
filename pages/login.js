import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, UserAddOutlined, MailOutlined  } from '@ant-design/icons'; 
import { Layout } from "antd";
const {Content, Sider } = Layout;
import Image from 'next/image'
import Link from 'next/link'

import MainLayout from '../components/layout/MainLayout'
import LoginForm from '../components/auth/LoginForm'


const Login = () => {
    

  return (
    <MainLayout>
        <div className="loginContainer">
            <div className="loginHolder">
                <div className="loginLeft">
                    <div className="loginLeftContent"></div>
                </div>
                <div className="loginRight">
                {LoginForm()}
                </div>
            </div>
        </div>
    </MainLayout>
  );
}

export default Login;