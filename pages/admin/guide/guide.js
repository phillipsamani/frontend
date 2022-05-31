import { Layout } from "antd";
 const {Content, Sider } = Layout;
import AdminMainLayout from "../../../components/layout/AdminMainLayout";
import AdminGuideLayout from '../../../components/admin/AdminGuideLayout'

function AdminGuide() {
  return (
    <AdminMainLayout>
      <AdminGuideLayout>
        <p>Teacher Guides index page!!!!!!</p>
      </AdminGuideLayout>
    </AdminMainLayout> 
  );
}

export default AdminGuide;

