import { Layout } from "antd";
const {Content } = Layout;
import LearnerSidebar from './AdminLearnerSidebar'

function AdminLayout({children}) {
  return (
    <Layout>
        <LearnerSidebar/>
        <Layout>
            <Content>
                {children}
            </Content>
        </Layout>
    </Layout>   
  );
}

export default AdminLayout;


