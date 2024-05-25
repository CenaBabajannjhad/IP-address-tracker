import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon from '../../assets/svg/icon-location.svg';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';



const Map = () => {
  let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [48, 55],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    // shadowSize: [41, 41],
  });

  L.Marker.prototype.options.icon = DefaultIcon;



  return (
    <div className='relative z-10 h-full bg-gray-300'>
      <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.488, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
