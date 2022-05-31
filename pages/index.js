// import { Button } from "antd";
import { Layout } from "antd";
const {Content, Sider } = Layout;

import MainLayout from '../components/layout/MainLayout'
import HomeMainLayout from '../components/home/HomeMainLayout'

const Home = () => {
  return (
    <MainLayout>
      <HomeMainLayout>
        <h1>Home Content will go here!!!!!</h1>
      </HomeMainLayout>
    </MainLayout>
  );
}

export default Home;