import { Layout } from "antd";
const {Content } = Layout;
import GuideSidebar from './AdminGuideSidebar'

function AdminLayout({children}) {
  return (
    <Layout>
        <GuideSidebar/>
        <Layout>
            <Content>
                {children}
            </Content>
        </Layout>
    </Layout>   
  );
}

export default AdminLayout;


