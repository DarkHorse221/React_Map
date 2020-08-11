import React, { Component } from "react";
import { connect } from "react-redux";
import { Drawer } from "antd";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import LeafletMap from "./LeafletMap";
import L from "leaflet";
import Camera from "../Camera";
import "./style.scss";

class MapView extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      lat: 16.5757523,
      lng: 80.2865137,
      zoom: 13,
      cameras: [
        {
          lat: 16.5757523,
          lng: 80.2865137,
          id: 1,
        },
        {
          lat: 16.577492,
          lng: 80.3535373,
          id: 2,
        },
        {
          lat: 16.577626,
          lng: 80.3495463,
          id: 3,
        },
        {
          lat: 16.577675,
          lng: 80.3463918,
          id: 4,
        },
        {
          lat: 16.57784,
          lng: 80.3434038,
          id: 5,
        },
      ],
      selectedCamera: null,
    };
  }

  state = {
    collapsed: true,
  };

  componentDidMount() {}

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

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showPopup = () => {
    this.showDrawer();
  };

  onCameraClicked = (camera, event) => {
    this.setState({ selectedCamera: camera }, () => {
      this.showPopup();
    });
    console.log(event, camera);
  };

  render() {
    // const cameraIcon = new L.Icon({
    //   iconUrl: "/images/camera.svg",
    //   iconRetinaUrl: "/images/camera.svg",
    //   iconSize: [20, 20],
    // });
    // const position = [this.state.lat, this.state.lng];

    return (
      <React.Fragment>
        <Drawer title="Camera" placement="right" closable={true} onClose={this.onClose} visible={this.state.visible} width={520}>
          <Camera camera={this.state.selectedCamera} />
        </Drawer>
        {/* <Map center={position} style={{ width: "100%", height: "100%" }} zoom={this.state.zoom}>
          <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {this.state.cameras.map((camera) => {
            return <Marker onclick={this.onCameraClicked.bind(this, camera)} icon={cameraIcon} position={[camera.lat, camera.lng]} key={camera.id}></Marker>;
          })}
        </Map> */}
        <div className="details-on-map show-map">
          <LeafletMap id="map" />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(MapView);
