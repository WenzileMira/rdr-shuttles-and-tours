import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
const Map = () => {
  const position = [-26.580901926879463, 31.319009409001232];
  const customIcon = new  Icon({
    iconUrl: require("../images/icons/location-red.png"),
    iconSize: [38, 38]
  })
  return(
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          This is the location of our Shuttle Depo.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
