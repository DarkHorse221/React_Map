import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Lane Type',
    dataIndex: 'name',
  },
  {
    title: 'Reported By',
    dataIndex: 'age',
  },
  {
    title: 'Details',
    dataIndex: 'address',
  },
  {
    title: 'Location',
    dataIndex: 'address',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    filters: [
      {
        text: 'Crash',
        value: 'active',
      },
      {
        text: 'Road Work',
        value: 'deactive',
      },
      {
        text: 'Cleared',
        value: 'deactive',
      },
      {
        text: 'Stall',
        value: 'deactive',
      },
      {
        text: 'Hazard',
        value: 'deactive',
      },
      {
        text: 'Unconfirmed',
        value: 'deactive',
      },
    ]
  },
  {
    title: 'Time',
    dataIndex: 'address',
  },
];
const data = [];
export default class IncidentTable extends Component {
  render() {
    return <Table columns={columns} dataSource={data} /> 
  }
  
}