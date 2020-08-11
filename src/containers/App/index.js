import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Card, Row, Col, Statistic, Carousel, Alert } from "antd";
import { BrowserRouter } from "react-router-dom";
import "../../App.css";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";
import Map from "../Map";
import MainDrawer from "./MainDrawer";
import logo from "../../assets/icons/icon.png";
import smallLogo from "../../assets/icons/icon_small.png";
import moment from "moment";
import { AreaChart, Area, BarChart, Bar } from "recharts";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import "./style.scss";

import vms1 from "../../assets/vms/01.png";
import vms2 from "../../assets/vms/02.png";
import vms3 from "../../assets/vms/03.png";

const { Header, Sider, Content, Footer } = Layout;

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format("YYYY-MM-DD"),
    y: Math.floor(Math.random() * 100) + 10,
  });
}
/**
 * Root/Template component
 */
class App extends Component {
  state = {
    collapsed: true,
    visible: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onIMSClicked = () => {
    this.setState({});
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showPopup = () => {
    debugger;
    this.showDrawer();
  };

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider collapsible onCollapse={this.toggle} collapsed={this.state.collapsed} style={{ textAlign: "center" }}>
            {this.state.collapsed ? <img className="logo" alt="" src={smallLogo} /> : <img className="logo" alt="" src={logo} />}

            <SideMenu onClick={this.showPopup} />
          </Sider>
          <Layout>
            <Header style={{ padding: "0px" }}>
              <div
                style={{
                  width: "100vw",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TopMenu style={{ width: "100%" }} />
              </div>
            </Header>
            <Content style={{ minHeight: "85vh", margin: "10px" }}>
              <Row gutter={[16, 16]}>
                <Col span={16} style={{ height: "420px" }}>
                  <Map />
                </Col>
                <Col span={8}>
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Card className="cardBG">
                        <Statistic title="Cameras (Active)" value={100} precision={0} valueStyle={{ color: "#10F7F2" }} prefix={<ArrowUpOutlined />} suffix="%" />
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card>
                        <Statistic title="Parking Lot (Available)" value={46} precision={0} valueStyle={{ color: "#ff0018" }} prefix={<ArrowDownOutlined />} suffix="slots" />
                      </Card>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <Card>
                        <h3 className="text-white">VMS</h3>
                        <Carousel dotPosition="top" autoplay>
                          <img style={{ height: "150px" }} src={vms1} alt="img" />
                          <img style={{ height: "150px" }} src={vms2} alt="img" />
                          <img style={{ height: "150px" }} src={vms3} alt="img" />
                        </Carousel>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 4 }}>
                  <Card style={{ height: "173px" }}>
                    <Statistic title="Total Vehicles" value={31289} precision={0} valueStyle={{ color: "#10F7F2" }} />
                    <Row>
                      <Col span={6}>
                        <h4 className="text-white">Car</h4>
                      </Col>
                      <Col span={6}>
                        <h4 className="text-white">Van</h4>
                      </Col>
                      <Col span={6}>
                        <h4 className="text-white">Bus</h4>
                      </Col>
                      <Col span={6}>
                        <h4 className="text-white">Multi</h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={6} className="indi_Num">
                        3278
                      </Col>
                      <Col span={6} className="indi_Num">
                        4543
                      </Col>
                      <Col span={6} className="indi_Num">
                        1567
                      </Col>
                      <Col span={6} className="indi_Num">
                        6344
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 4 }}>
                  <Card>
                    <Statistic title="Avg Speed" value={85} suffix="Kmph" precision={0} />
                    <AreaChart
                      width={230}
                      height={60}
                      data={visitData}
                      margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                      }}
                    >
                      <Area type="monotone" dataKey="y" stroke="#adaba8" fill="#5f5f5f" />
                    </AreaChart>
                  </Card>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 16 }} xl={{ span: 8 }}>
                  <Card style={{ height: "173px" }}>
                    <h3 className="text-white">Alerts</h3>
                    <Carousel dotPosition="bottom" autoplay>
                      <div>
                        <Alert message="Error Text" description="Error Description Error Description Error Description Error Description" type="error" />
                      </div>
                      <div>
                        <Alert message="Error Text" description="Error Description Error Description Error Description Error Description" type="warning" />
                      </div>
                      <div>
                        <Alert message="Error Text" description="Error Description Error Description Error Description Error Description" type="error" />
                      </div>
                      <div>
                        <Alert message="Error Text" description="Error Description Error Description Error Description Error Description" type="warning" />
                      </div>
                    </Carousel>
                  </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 4 }}>
                  <Card style={{ height: "173px" }}>
                    <h3 className="text-white">Weather</h3>
                    <Row>
                      <Col span={12}>
                        <Statistic title="Temp" value="32" suffix="°C" precision={0} />
                      </Col>
                      <Col span={12}>
                        <Statistic title="Wind Speed" value={100} suffix="Kmph" precision={0} />
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col xs={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 2 }}>
                  <Card style={{ height: "173px" }}>
                    <h3 className="text-white">ECB Status</h3>
                    <Statistic title="Calls Received" value={85} suffix="" precision={0} />
                  </Card>
                </Col>
                <Col xs={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 2 }}>
                  <Card style={{ height: "173px" }}>
                    <h3 className="text-white">Recharge Station</h3>
                    <Statistic title="Available" value={3} suffix="" precision={0} />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 6 }}>
                  <Card style={{ textAlign: "center" }}>
                    <h3 className="text-white">Cam 13</h3>
                    <img src="https://www.cctvview.info/camimages/5bf5f6d75ad9c2a1a6ad84c53e073931.jpg" alt="img" />
                  </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 6 }}>
                  <Card style={{ textAlign: "center" }}>
                    <h3 className="text-white">Cam 26</h3>
                    <img src="https://www.cctvview.info/camimages/f0c2277263d688b3cf415aba8c0e7a2b.jpg" alt="img" />
                  </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 6 }}>
                  <Card style={{ textAlign: "center" }}>
                    <h3 className="text-white">Cam 06</h3>
                    <img src="https://www.cctvview.info/camimages/62b68db85c5576800f7bc96bef166060.jpg" alt="img" />
                  </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 6 }}>
                  <Card style={{ textAlign: "center" }}>
                    <h3 className="text-white">Cam 11</h3>
                    <img src="https://www.cctvview.info/camimages/82f36608a1e888a4f480d83083ccd302.jpg" alt="img" />
                  </Card>
                </Col>
              </Row>
              <MainDrawer />
            </Content>
            <Footer style={{ textAlign: "center" }}>ITMS ©2020</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(App);
