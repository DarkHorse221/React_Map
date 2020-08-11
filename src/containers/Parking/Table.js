import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Available Slots',
    dataIndex: 'address',
  },
  {
    title: 'Location',
    dataIndex: 'address',
  },
  {
    title: 'Status',
    dataIndex: 'address',
  },
];
const data = [];
export default class ParkingTable extends Component {
  render() {
    return <Table columns={columns} dataSource={data} /> 
  }
  
}