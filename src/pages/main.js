import React from 'react';
import QRcode from '../resources/QRcode_mini.jpg';
import { Layout, Menu, Icon } from 'antd';
import CoursesList from '../components/CoursesList';
import Profile from '../components/Profile';
import EditProfile from './EditProfile';
import Report from './Report';
import { BrowserRouter, Route } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

class MainPage extends React.Component {

  userInfo = JSON.parse(localStorage.getItem("mateAccountInfo"));

  onMenuClick = (item) => {
    console.log(item.key, typeof item.key);
    if (item.key === '1')
      window.location.href = '/main/CoursesList';
    if (item.key === '2')
      window.location.href = '/main/SurveyList';
    if (item.key === '3')
      window.location.href = '/main/Profile';
    if (item.key === '4')
      window.location.href = '/main/Report';
  }

  render() {
    console.log(this.userInfo);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          // collapsible
          // collapsed={this.state.collapsed}
          // onCollapse={this.onCollapse}
          width='180'
        >
          <Menu
            mode="inline"
            onClick={this.onMenuClick}
            theme="dark"
          >
            <Menu.Item key="1"><Icon type="hdd" theme="outlined" />课程列表</Menu.Item>
            <Menu.Item key="3"><Icon type="user" theme="outlined" />个人信息修改</Menu.Item>
            <div className="footer">
              <img src={QRcode} className="QRcode" alt="QRcode"/>
              <p className="text">Mate @2018 </p>
              <p className="text">Created by Hooli-group</p>
            </div>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#eee', padding: 0 }}>
            <div className="App">
              <header className="App-header">
                <Profile userInfo={this.userInfo}/>
              </header>
            </div>
          </Header>
          <Content className="wrapper-content" style={{ margin: '60px 16px' }}>
            <BrowserRouter>
              <div>
                <Route exact path='/main/CoursesList' component={() => <CoursesList teacher_id={this.userInfo._id} />} />
                <Route path='/main/Profile' component={EditProfile} />
                <Route path='/main/Report/:id' component={Report} />
              </div>
            </BrowserRouter>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;
