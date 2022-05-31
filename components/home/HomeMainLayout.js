import { Layout } from "antd";
const {Content } = Layout;
import HomeSidebar from './HomeSidebar'

function HomeLayout({children}) {
  return (
    <Layout>
        <HomeSidebar/>
        <Layout>
            <Content>
                {children}
            </Content>
        </Layout>
    </Layout>   
  );
}

export default HomeLayout;