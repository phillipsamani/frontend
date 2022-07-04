import { Layout } from "antd";
 const {Content, Sider } = Layout;
import AdminMainLayout from "../../../components/layout/AdminMainLayout";
import AdminSyllabusLayout from '../../../components/admin/AdminSyllabusLayout'
import Admin from '../../../components/auth/Admin'


function AdminRationale() {
  return (
    <AdminMainLayout>
      <Admin>
      <AdminSyllabusLayout>
        <p>Syllabus Rationale Landing page!!</p>
      </AdminSyllabusLayout>
      </Admin>
    </AdminMainLayout> 
  );
}

export default AdminRationale;

