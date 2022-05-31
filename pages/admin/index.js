import { Layout } from "antd";
 const {Content, Sider } = Layout;
import AdminMainLayout from "../../components/layout/AdminMainLayout";
import AdminSyllabusLayout from '../../components/admin/AdminSyllabusLayout'

function Admin() {
  return (
    <AdminMainLayout>
      <AdminSyllabusLayout>
        <p>Syllabus index page!</p>
      </AdminSyllabusLayout>
    </AdminMainLayout> 
  );
}

export default Admin;

