import React, { useEffect, useState } from "react";
import { Button, message, Popconfirm, Table, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getEmployees, deleteEmployee } from "../api/employeApi";
import type { Employee } from "../interfaces/Employee";

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const res = await getEmployees();
      setEmployees(res.data);
    } catch {
      message.error("Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteEmployee(id);
      message.success("Employee deleted");
      fetchEmployees();
    } catch {
      message.error("Delete failed");
    }
  };

  return (
    <div style={{ padding: 24, margin: "0px 100px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <h2>Employees</h2>
        <Button type="primary" onClick={() => navigate("/create")}>
          Create Employee
        </Button>
      </div>

      <Table
        dataSource={employees}
        rowKey="id"
        loading={loading}
        bordered
        pagination={{ pageSize: 5 }}
        columns={[
          { title: "Name", dataIndex: "name" },
          { title: "Email", dataIndex: "email" },
          { title: "Position", dataIndex: "position" },
          { title: "Department", dataIndex: "department" },
          { title: "Age", dataIndex: "age" },
          {
            title: "Action",
            render: (_, record) => (
              <>
                <Tooltip title="Edit">
                  <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => navigate(`/edit/${record.id}`)}
                  />
                </Tooltip>
                <Popconfirm
                  title="Are you sure to delete this employee?"
                  onConfirm={() => handleDelete(record.id!)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Tooltip title="Delete">
                    <Button type="text" danger icon={<DeleteOutlined />} />
                  </Tooltip>
                </Popconfirm>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default EmployeeList;
