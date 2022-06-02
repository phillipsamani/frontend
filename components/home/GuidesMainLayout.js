import { Layout } from "antd";
const {Content } = Layout;
import GuidesSidebar from './GuidesSidebar'

function GuidesMain({children}) {
  return (
    <Layout>
        <GuidesSidebar />
        <Layout>
            <Content>
                {children}
            </Content>
        </Layout>
    </Layout>   
  );
}

export default GuidesMain;        