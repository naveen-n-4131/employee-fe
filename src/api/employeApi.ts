import axios from 'axios';
import type { Employee } from '../interfaces/Employee';

const API_URL = 'http://localhost:8080/api/employees';

export const getEmployees = () => axios.get<Employee[]>(API_URL);
export const getEmployeeById = (id: number) => axios.get<Employee>(`${API_URL}/${id}`);
export const createEmployee = (employee: Omit<Employee, 'id'>) => axios.post(API_URL, employee);
export const updateEmployee = (id: number, employee: Omit<Employee, 'id'>) => axios.put(`${API_URL}/${id}`, employee);
export const deleteEmployee = (id: number) => axios.delete(`${API_URL}/${id}`);
