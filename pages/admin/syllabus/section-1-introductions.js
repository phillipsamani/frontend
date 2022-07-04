import { Layout } from "antd";
 const {Content, Sider } = Layout;
import AdminMainLayout from "../../../components/layout/AdminMainLayout";
import AdminSyllabusLayout from '../../../components/admin/AdminSyllabusLayout'
import Admin from '../../../components/auth/Admin'
import CreateIntroductionForm from '../../../components/admin/CRUD/Section_1_Introduction'

function AdminIntroduction() {
  return (
    <AdminMainLayout>
      <Admin>
      <AdminSyllabusLayout>
          <div>
            <div>
                <div className="adminSyllabusIntroduction">
                <CreateIntroductionForm />
                </div>
            </div>
          </div>
      </AdminSyllabusLayout>
      </Admin>
    </AdminMainLayout> 
  );
}

export default AdminIntroduction;

