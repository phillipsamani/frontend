import { Layout } from "antd";
const {Content } = Layout;
import SyllabusSidebar from './SyllabusSidebar'

function SyllabusMain({children}) {
  return (
    <Layout>
        <SyllabusSidebar/>
        <Layout>
            <Content>
                {children}
            </Content>
        </Layout>
    </Layout>   
  );
}

export default SyllabusMain;        