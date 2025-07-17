import React from 'react';
import { Layout } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

import logo from '../assets/procore-vector-logo.svg';

const { Header, Content, Footer } = Layout;

const AppLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh', minWidth: '100vw' }}>
      <Header style={{ background: '#dcd4f3', display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: 100, marginRight: 100, cursor: 'pointer' }}
        />
        <div
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 600,
            cursor: 'pointer',
            marginRight: 24,
          }}
          onClick={() => navigate('/')}
        >
          Employees
        </div>
      </Header>

      <Content style={{ padding: 24, background: '#fff' }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Procore ©2025 Created with React
      </Footer>
    </Layout>
  );
};

export default AppLayout;
