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
    title: 'Camera',
    dataIndex: 'address',
  },
  {
    title: 'Total Vehicle Count',
    dataIndex: 'address',
  },
  {
    title: 'Status',
    dataIndex: 'address',
  },
];
const data = [];
export default class ATCCTable extends Component {
  render() {
    return <Table columns={columns} dataSource={data} /> 
  }
  
}