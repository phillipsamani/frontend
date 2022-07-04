import { Layout } from "antd";
import AdminMainLayout from "../../../components/layout/AdminMainLayout";
import AdminSyllabusLayout from '../../../components/admin/AdminSyllabusLayout'
import Admin from '../../../components/auth/Admin'


function AdminSubjects() {
  return (
    <AdminMainLayout>
      <Admin>
      <AdminSyllabusLayout>
        <p>Subjects Landing page!!</p>
      </AdminSyllabusLayout>
      </Admin>
    </AdminMainLayout> 
  );
}

export default AdminSubjects;

