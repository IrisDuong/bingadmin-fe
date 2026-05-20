import { Layout, Flex, ConfigProvider } from 'antd'
import { Outlet } from 'react-router-dom';
import TopHeader from './header/TopHeader';
import LeftMenu from './left-side/LeftMenu';
const {Header, Sider, Content} = Layout;
function Home() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg:"#fffff",
            headerPadding:"10px",
            siderBg:"#fffff",
            bodyBg:"#fffff"
          }
        }
      }}
    >
        <Layout id='home'>
          <Header id="top-header" style={{ padding: 0 }}><TopHeader/></Header>
          <Layout>
            <Sider width="18%" id='left-side'>
              <LeftMenu/>
            </Sider>
            <Content id='content-side'>
              <Flex vertical>
                <Outlet/>
              </Flex>
            </Content>
          </Layout>
        </Layout>
    </ConfigProvider>
  )
}

export default Home