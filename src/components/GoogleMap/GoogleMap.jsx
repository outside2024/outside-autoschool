'use client'

import {Map, GoogleApiWrapper, Marker} from "google-maps-react";
import {markers} from "@/components/GoogleMap/markers";
import GoogleMapStyled from "@/components/GoogleMap/GoogleMap.styled";
import {useTranslation} from "next-i18next";

const mapStyles = {
  width: '100%',
  height: '50%'
};

const GoogleMap = () => {
  const { t } = useTranslation();

  return (
    <GoogleMapStyled>
      <div className="contentContainer">
        <div className="contentWrapper">
          <h1>{t('branches.title')}</h1>
        </div>
      </div>



          <Map
            google={window.google}
            zoom={12}
            style={mapStyles}
            initialCenter={
              {
                lat: 48.4647,
                lng: 35.0462
              }
            }
          >
            {markers.map(marker => (
              <Marker
                key={marker.id}
                position={marker.position}
              />
            ))}

          </Map>


    </GoogleMapStyled>
  )
}


export default GoogleApiWrapper({
  apiKey: "REPLACED-API-KEY"
})(GoogleMap);