import { Layout } from "antd";
 const {Content, Sider } = Layout;
import AdminMainLayout from "../../../components/layout/AdminMainLayout";
import AdminLearnerLayout from '../../../components/admin/AdminLearnerLayout'

function AdminLearner() {
  return (
    <AdminMainLayout>
      <AdminLearnerLayout>
        <p>Student books index page!!!!!!</p>
      </AdminLearnerLayout>
    </AdminMainLayout> 
  );
}

export default AdminLearner;

