import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { branches, data } from '@/components/GoogleMap/data';
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

const GoogleMapComponent = () => {
  const { t } = useTranslation();

  const widowSize = useWindowSize();
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_MAP_KEY.toString(),
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
          center={{ lat: 48.4647, lng: 35.0462 }}
          zoom={12}
          onUnmount={() => setMap(null)}
        >
          {data.map((marker) => (
            <MarkerF key={marker.id} position={marker.position} />
          ))}
        </GoogleMap>
      ) : (
        <div />
      )}
      <div className="branchesAddress">
        <h2 className="typoColorBlack typoTitleSecondar">{t('branches.addresses.city')}</h2>
        <div className="mobileContainer">
          <div className="mobileNumber">+38 (098)055-59-99</div>
          <div className="mobileNumber">+38 (067)609-75-24</div>
        </div>
        <div className="addressesContainer">
          {branches.map((branch) => (
            <div key={branch.id} className="branch">
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
