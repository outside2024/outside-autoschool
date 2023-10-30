// import React from 'react'
// import GoogleMapReact from 'google-map-react'
// import './map.css'
//
// const Map = () => {
//   const location = {
//     address: '1600 Amphitheatre Parkway, Mountain View, california.',
//     lat: 37.42216,
//     lng: -122.08427,
//   }
//
//   return (
//     <div>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'REPLACED-API-KEY' }}
//          defaultCenter={location}
//         defaultZoom={17}
//       >
//         11
//       </GoogleMapReact>
//     </div>
//   );
// };
//
// export default Map;

'use client'

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: '100%',
  height: '50%'
};

const GoogleMap= () => {

  return (
   <Map
     google={window.google}
     zoom={10}
     style={mapStyles}
     initialCenter={
       {
         lat: 48.4647,
         lng: 35.0462
       }
     }
   >
     <Marker
       position={
         {
           lat: 48.46664797866335,
           lng: 35.045070210719956
         }
       }
     />

     <Marker
       position={
         {
           lat: 48.53001555031674,
           lng: 35.07429871066665
         }
       }
     />
     <Marker
       position={
         {
           lat: 48.428204978684754,
           lng: 35.012609552987435
         }
       }
     />
     <Marker
       position={
         {
           lat: 48.418252600989646,
           lng: 35.05938695484325
         }
       }
     />
     <Marker
       position={
         {
           lat: 48.41426469462839,
           lng: 35.13477559716968
         }
       }
     />
     <Marker
       position={
         {
           lat: 48.47720138118242,
           lng: 34.91912628182686
         }
       }
     />
     <Marker
       position={
         {
           lat: 48.40774099080989,
           lng: 35.00006226833276
         }
       }
     />
     <Marker
       position={
         {
           lat: 48.525907898226464,
           lng: 35.034695112522726
         }
       }
     />
     <Marker
       position={
         {
           lat: 48.51580233083259,
           lng: 35.08345999717568
         }
       }
     />

   </Map>
  )
}


export default GoogleApiWrapper({
  apiKey: "REPLACED-API-KEY"
})(GoogleMap);