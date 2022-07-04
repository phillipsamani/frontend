// import { Button } from "antd";
import { Layout } from "antd";
const {Content, Sider } = Layout;

import MainLayout from '../components/layout/MainLayout'
// import HomeMainLayout from '../components/home/HomeMainLayout'

const Home = () => {
  return (
    <MainLayout>
      {/* <HomeMainLayout> */}
        <h1>Home Content will go here!!!!!</h1>

        {/* ED25519 key fingerprint is SHA256:mfDW2qLVYHfApMtfFAt6KL2O4LZwDHY70B7HiOpLb1Q */}
        {/* location /api {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        }

        location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        } */}

      {/* </HomeMainLayout> */}
    </MainLayout>
  );
}

export default Home;