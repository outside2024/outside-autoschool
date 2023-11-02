import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { v4 as uuidv4 } from 'uuid';
import { citiesData, branchesData } from '@/components/GoogleMap/data';
import GoogleMapStyled from '@/components/GoogleMap/GoogleMap.styled';
import useWindowSize from '@/hooks/useWindowSize';

const desktopMapStyles = {
  width: '100%',
  height: '718px',
};

const mobileMapStyles = {
  width: '100%',
  height: '288px',
};

const activeBranch = 'dnipro';

const GoogleMapComponent = () => {
  const { t } = useTranslation();

  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(12);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    setCenter(citiesData[activeBranch]);
    setBranches(branchesData[activeBranch]);
    setZoom(12);
  }, [activeBranch]);

  const widowSize = useWindowSize();
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_MAP_KEY,
  });

  const [, setMap] = useState(null);

  return (
    <GoogleMapStyled>
      <div className="contentContainer">
        <div className="contentWrapper">
          <h2 className="typoColorBlack typoTitleSecondar branchesTitle">{t('branches.title')}</h2>
        </div>
      </div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={widowSize.width >= 720 ? desktopMapStyles : mobileMapStyles}
          center={center}
          zoom={zoom}
          onUnmount={() => setMap(null)}
          options={{
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: false,
            mapTypeControl: false,
          }}
        >
          {branches.map((marker) => (
            <MarkerF key={marker.id} position={marker.coordinates} />
          ))}
        </GoogleMap>
      ) : (
        <div />
      )}
      <div className="branchesAddress">
        <h2 className="typoColorBlack typoTitleSecondar">{t(`branches.${activeBranch}.city`)}</h2>
        <div className="mobileContainer">
          {citiesData[activeBranch].phoneNumbers.map((number) => (
            <div key={uuidv4()} className="mobileNumber">
              {number}
            </div>
          ))}
        </div>
        <div className="addressesContainer">
          {branches.map((branch) => (
            <div
              key={branch.id}
              onClick={() => {
                setCenter(branch.coordinates);
                setZoom(15);
              }}
              className="branch"
            >
              <i className="icon-map-pin iconPin" />
              <div>
                <div className="branchName">{t(`${branch.name}`)}</div>
                <div className="branchAddress">{t(`${branch.address}`)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GoogleMapStyled>
  );
};

export default GoogleMapComponent;
