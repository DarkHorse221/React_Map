import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Location',
    dataIndex: 'address',
  },
  {
    title: 'Monitor',
    dataIndex: 'address',
  },
  {
    title: 'Status',
    dataIndex: 'address',
    filters: [
      {
        text: 'Active',
        value: 'active',
      },
      {
        text: 'Inactive',
        value: 'deactive',
      },
      {
        text: 'Not Published',
        value: 'deactive',
      },
      {
        text: 'Video loss',
        value: 'deactive',
      },
    ]
  },
];
const data = [];
export default class CameraTable extends Component {
  render() {
    return <Table columns={columns} dataSource={data} /> 
  }
  
}