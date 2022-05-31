import { Layout } from "antd";
const {Content } = Layout;
import HomeSidebar from './AdminSyllabusSidebar'

function AdminLayout({children}) {
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

export default AdminLayout;


