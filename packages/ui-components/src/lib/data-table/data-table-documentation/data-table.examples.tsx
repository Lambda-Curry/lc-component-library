import React, { FC } from 'react';
import { DataTable } from '..';
import { createTextFilter, createSelectFilter, createNumberFilter, createDateFilter } from '../filters';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  age: number;
  joinDate: string;
}

const mockUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', age: 32, joinDate: '2022-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', age: 28, joinDate: '2022-03-22' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', age: 45, joinDate: '2021-11-05' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Admin', age: 37, joinDate: '2022-02-18' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', age: 29, joinDate: '2022-04-10' },
  { id: 6, name: 'Diana Miller', email: 'diana@example.com', role: 'Editor', age: 41, joinDate: '2021-10-30' },
  { id: 7, name: 'Edward Davis', email: 'edward@example.com', role: 'User', age: 33, joinDate: '2022-05-05' },
  { id: 8, name: 'Fiona Clark', email: 'fiona@example.com', role: 'Admin', age: 39, joinDate: '2021-12-12' },
  { id: 9, name: 'George White', email: 'george@example.com', role: 'User', age: 26, joinDate: '2022-06-20' },
  { id: 10, name: 'Hannah Lee', email: 'hannah@example.com', role: 'Editor', age: 31, joinDate: '2022-01-25' },
  { id: 11, name: 'Ian Taylor', email: 'ian@example.com', role: 'User', age: 44, joinDate: '2021-09-15' },
  { id: 12, name: 'Julia Martin', email: 'julia@example.com', role: 'Admin', age: 35, joinDate: '2022-03-05' }
];

export const DataTableExample: FC = () => {
  const columns = [
    { header: 'ID', accessor: 'id' as keyof User },
    { header: 'Name', accessor: 'name' as keyof User },
    { header: 'Email', accessor: 'email' as keyof User },
    { header: 'Role', accessor: 'role' as keyof User },
    { header: 'Age', accessor: 'age' as keyof User },
    { header: 'Join Date', accessor: 'joinDate' as keyof User }
  ];

  const filters = [
    createTextFilter('name', 'Name', 'Search by name...'),
    createSelectFilter('role', 'Role', [
      { value: 'Admin', label: 'Admin' },
      { value: 'Editor', label: 'Editor' },
      { value: 'User', label: 'User' }
    ]),
    createNumberFilter('age', 'Age', { min: 18, max: 100 }),
    createDateFilter('joinDate', 'Join Date')
  ];

  return (
    <DataTable
      data={mockUsers}
      columns={columns}
      filters={filters}
      itemsPerPage={5}
      footnote="This is an example of a data table with filtering and pagination."
    />
  );
};