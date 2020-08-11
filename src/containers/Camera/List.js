import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Drawer } from 'antd';

class CameraList extends Component {

  static propTypes = {
  }

  constructor(props) {
    super(props);
    
    this.state = {
      visible: true,
      columns: [{
        title: 'Model',
        dataIndex: 'model',
        key: 'model',
      },{
        title: 'Encoding',
        dataIndex: 'encoding',
        key: 'encoding',
      },{
        title: 'URI Scheme',
        dataIndex: 'uriSchema',
        key: 'uriSchema',
      },{
        title: 'URI Path',
        dataIndex: 'uri',
        key: 'uri',
      },{
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
        render: (text, record) => <div>
          lat: {record.location.lat}<br/>
          lon: {record.location.lon}
        </div>
      }],
      data: [{
        model: 'DS-2AE4225TI-D',
        encoding: 'H264',
        uriSchema: 'rtsp',
        uri: '172.178.41.52/rtsp/h264',
        location: {
          lat: '17.3532',
          lon: '64.1212'
        }
      },
      {
        model: 'DS-2AE4225TI-D',
        encoding: 'H264',
        uriSchema: 'rtsp',
        uri: '172.179.41.52/rtsp/h264',
        location: {
          lat: '17.3534',
          lon: '65.1215'
        }
      }]
    }
  }


  onClose = () => {
    this.setState({visible: false})
  }

 

  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({visible: true})
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    return <React.Fragment>
      <Table columns={this.state.columns} rowSelection={rowSelection} dataSource={this.state.data} />
      <Drawer
          title="Basic Drawer"
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
    </React.Fragment>
  }
}

const mapStateToProps = (state) => ({
});

const actionCreators = {
};

export default connect(
  mapStateToProps,
  actionCreators,
)(CameraList);
