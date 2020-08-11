import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Messages',
    dataIndex: 'address',
  },
  {
    title: 'Location',
    dataIndex: 'address',
  },
  {
    title: 'Brightness',
    dataIndex: 'address',
  },
  {
    title: 'Status',
    dataIndex: 'address',
    filters: [
      {
        text: 'Available',
        value: 'active',
      },
      {
        text: 'Scheduled',
        value: 'deactive',
      },
      {
        text: 'Failed',
        value: 'deactive',
      },
      {
        text: 'Maintainence',
        value: 'deactive',
      },
    ]
  },
];
const data = [];
export default class VMSTable extends Component {
  render() {
    return <Table columns={columns} dataSource={data} /> 
  }
  
}