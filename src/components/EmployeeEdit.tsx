import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { getEmployeeById, updateEmployee } from '../api/employeApi';
import { Spin, message } from 'antd';
import type { Employee } from '../interfaces/Employee';

const EmployeeEdit: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getEmployeeById(Number(id))
        .then((res) => setEmployee(res.data))
        .catch(() => {
          message.error('Failed to load employee');
          navigate('/');
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleUpdate = async (values: Omit<Employee, 'id'>) => {
    try {
      await updateEmployee(Number(id), values);
      message.success('Employee updated');
      navigate('/');
    } catch {
      message.error('Update failed');
    }
  };

  if (loading) return <Spin style={{ margin: '40px auto', display: 'block' }} />;

  return (
    <div style={{ padding: 24 }}>
      <h2>Edit Employee</h2>
      <EmployeeForm initialValues={employee || {}} onFinish={handleUpdate} submitText="Update" />
    </div>
  );
};

export default EmployeeEdit;
