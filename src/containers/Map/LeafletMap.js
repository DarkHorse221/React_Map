import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// import "./style.scss";

class LeafletMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 16.5757523,
      lng: 80.2865137,
      zoom: 13,
      hqCoord: [45.49007, -122.79014],
      boCoord: [40.260334, -76.882865],
    };
  }

  componentDidMount() {
    window.resizeTo(1919, 1080);
  }

  travel = (locationTo) => {
    this.setState({
      lat: locationTo === "bo" ? this.state.boCoord[0] : this.state.hqCoord[0],
      lng: locationTo === "bo" ? this.state.boCoord[1] : this.state.hqCoord[1],
      zoom: locationTo === "bo" ? 7 : 11,
    });
  };

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>' url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png" />
        {/* <TileLayer attribution='&copy; <a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png" /> */}
      </Map>
    );
  }
}

export default LeafletMap;
