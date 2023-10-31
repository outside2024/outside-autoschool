import { useTranslation } from 'next-i18next';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
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

const GoogleMap = () => {
  const { t } = useTranslation();

  const widowSize = useWindowSize();

  return (
    <GoogleMapStyled>
      <div className="contentContainer">
        <div className="contentWrapper">
          <h2 className="typoColorBlack typoTitleSecondar branchesTitle">{t('branches.title')}</h2>
        </div>
      </div>
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
      <Map
        google={window.google}
        zoom={12}
        style={widowSize.width >= 720 ? desktopMapStyles : mobileMapStyles}
        initialCenter={{
          lat: 48.4647,
          lng: 35.0462,
        }}
      >
        {data.map((marker) => (
          <Marker key={marker.id} position={marker.position} />
        ))}
      </Map>
    </GoogleMapStyled>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_API_MAP_KEY,
})(GoogleMap);
