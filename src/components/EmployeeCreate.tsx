import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { createEmployee } from '../api/employeApi';
import { message } from 'antd';
import type { Employee } from '../interfaces/Employee';

const EmployeeCreate: React.FC = () => {
  const navigate = useNavigate();

  const handleCreate = async (values: Omit<Employee, 'id'>) => {
    try {
      await createEmployee(values);
      message.success('Employee created');
      navigate('/');
    } catch {
      message.error('Create failed');
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Create Employee</h2>
      <EmployeeForm onFinish={handleCreate} submitText="Create" />
    </div>
  );
};

export default EmployeeCreate;
