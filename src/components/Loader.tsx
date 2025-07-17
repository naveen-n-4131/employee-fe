import React from 'react';
import { Spin } from 'antd';

const Loader: React.FC = () => (
  <div style={{ textAlign: 'center', padding: '20px 0' }}>
    <Spin size="large" />
  </div>
);

export default Loader;
