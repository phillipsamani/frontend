import { Layout } from "antd";
const {Content } = Layout;
import LearnersSidebar from './LearnersSidebar'

function LearnersMain({children}) {
  return (
    <Layout>
        <LearnersSidebar />
        <Layout>
            <Content>
                {children}
            </Content>
        </Layout>
    </Layout>   
  );
}

export default LearnersMain;        