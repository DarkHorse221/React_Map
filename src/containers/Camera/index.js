import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import { Row, Col, Slider, Button } from 'antd';
import CameraTable from './Table';

class Video extends Component {

  static propTypes = {
  }

  render() {
    const camera = this.props.camera ||  {
      lat: 16.5757523,
      lng: 80.2865137,
      id: 1
    };
    return (
      <div>
        <Row>
          <Col span={18}>
            Name: Cam {camera? camera.id : ""}
          </Col>
          <Col span={3}>
            #3
          </Col>
          <Col span={3}>
            Mon:
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <img alt="camera-preview" height="300px" style={{ padding: "20px" }} src="http://37.10.168.125:80/mjpg/video.mjpg" />
          </Col>
        </Row>
        <Row gutter={5} style={{ textAlign: "center" }}>
          <Col span={3}>
            <div style={{ "float": 'right', "height": 100, "marginLeft": 70 }}>
              <Slider vertical defaultValue={30} />
            </div>
          </Col>
          <Col span={5}>
            <Row>
              <Col span={8}></Col>
              <Col span={8}><Button size="small"><CaretUpOutlined /></Button></Col>
              <Col span={8}></Col>
            </Row>
            <Row>
              <Col span={8}><Button size="small"><CaretLeftOutlined /></Button></Col>
              <Col span={8}></Col>
              <Col span={8}><Button size="small"><CaretRightOutlined /></Button></Col>
            </Row>
            <Row>
              <Col span={8}></Col>
              <Col span={8}><Button size="small"><CaretDownOutlined /></Button></Col>
              <Col span={8}></Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col span={14}>Zoom</Col>
              <Col span={5}><Button size="small"><MinusOutlined /></Button></Col>
              <Col span={5}><Button size="small"><PlusOutlined /></Button></Col>
            </Row>
            <Row>
              <Col span={14}>Focus</Col>
              <Col span={5}><Button size="small">N</Button></Col>
              <Col span={5}><Button size="small">F</Button></Col>
            </Row>
            <Row>
              <Col span={14}>Iris</Col>
              <Col span={5}><Button size="small">O</Button></Col>
              <Col span={5}><Button size="small">C</Button></Col>
            </Row>
          </Col>
          <Col push={1} span={8}>
          <Row>
              <Col span={6}></Col>
              <Col span={4}><Button size="small">1</Button></Col>
              <Col span={4}><Button size="small">5</Button></Col>
              <Col span={4}><Button size="small">&nbsp;&nbsp;9</Button></Col>
              <Col span={6}></Col>
            </Row>
            <Row>
              <Col span={6}></Col>
              <Col span={4}><Button size="small">2</Button></Col>
              <Col span={4}><Button size="small">6</Button></Col>
              <Col span={4}><Button size="small">10</Button></Col>
              <Col span={6}></Col>
            </Row>
            <Row>
              <Col span={6}></Col>
              <Col span={4}><Button size="small">3</Button></Col>
              <Col span={4}><Button size="small">7</Button></Col>
              <Col span={4}><Button size="small">11</Button></Col>
              <Col span={6}></Col>
            </Row>
            <Row>
              <Col span={6}></Col>
              <Col span={4}><Button size="small">4</Button></Col>
              <Col span={4}><Button size="small">8</Button></Col>
              <Col span={4}><Button size="small">12</Button></Col>
              <Col span={6}></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <br/>
        </Row>
        <Row>
          <Col span={24}>
            <CameraTable />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const actionCreators = {
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Video);
