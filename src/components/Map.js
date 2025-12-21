import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const Map = () => {
  const mapCenter = [-26.5, 28.5]; // Southern Africa center

  const customIcon = new Icon({
    iconUrl: require("../images/icons/location-red.png"),
    iconSize: [38, 38]
  });

  const locations = [
    {
      name: "Gauteng",
      position: [-26.2708, 28.1123],
      description: "Gauteng Province – Johannesburg / Pretoria"
    },
    {
      name: "Mpumalanga",
      position: [-25.5653, 30.5279],
      description: "Mpumalanga Province – Nelspruit"
    },
    {
      name: "Limpopo",
      position: [-23.9045, 29.4689],
      description: "Limpopo Province – Polokwane"
    },
    {
      name: "KwaZulu-Natal",
      position: [-29.8587, 31.0218],
      description: "KwaZulu-Natal Province – Durban"
    },
    
    {
      name: "Eastern Cape",
      position: [-33.0153, 27.9116],
      description: "Eastern Cape Province – East London"
    },
    {
      name: "Free State",
      position: [-29.0852, 26.1596],
      description: "Free State Province – Bloemfontein"
    },
    {
      name: "North West",
      position: [-25.8652, 25.6442],
      description: "North West Province – Mahikeng"
    },
    {
      name: "Northern Cape",
      position: [-28.7282, 24.7499],
      description: "Northern Cape Province – Kimberley"
    },
    {
      name: "Mbabane",
      position: [-26.3054, 31.1367],
      description: "Mbabane – Eswatini"
    },
    {
      name: "Manzini",
      position: [-26.4959, 31.3887],
      description: "Manzini – Eswatini"
    },
    {
      name: "Maputo",
      position: [-25.9692, 32.5732],
      description: "Maputo – Mozambique"
    }
  ];

  return (
    <MapContainer
      center={mapCenter}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.position}
          icon={customIcon}
        >
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
