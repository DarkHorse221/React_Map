import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, DirectionsRenderer } from "react-google-maps"

export default withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 16.5719907, lng: 80.348956 }}
  >
    <Polyline  path={[{ lat: 16.581816, lng: 80.304321 }, { lat: 16.573252, lng: 80.277164 }]}/>
    {props.isMarkerShown && 
    <Marker 
      position={{ lat: 16.579953, lng: 80.299669 }}
      icon={{url: "/images/camera.svg", size: new window.google.maps.Size(30, 30)}}  />}
    <Marker 
      position={{ lat: 16.572354, lng: 80.271378 }}
      icon={{url: "/images/camera.svg", size: new window.google.maps.Size(30, 30)}}  />}
  </GoogleMap>
))
