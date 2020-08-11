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
    title: 'Status',
    dataIndex: 'address',
    filters: [
      {
        text: 'Active',
        value: 'active',
      },
      {
        text: 'Deactive',
        value: 'deactive',
      },
    ]
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <button>action</button>,
  },
];
const data = [];
export default class BeaconTable extends Component {
  render() {
    return <Table columns={columns} dataSource={data} /> 
  }
  
}