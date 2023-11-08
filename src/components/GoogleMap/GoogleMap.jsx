import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
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

const GoogleMapComponent = ({ activeBranch }) => {
  const { t } = useTranslation();
  const widowSize = useWindowSize();

  const [branches, setBranches] = useState([]);
  const [activeAddress, setActiveAddress] = useState(-1);

  const [map, setMap] = useState(null);

  useEffect(() => {
    setBranches(branchesData[activeBranch]);
    if (!map) return;
    map.setZoom(widowSize.width >= 767 ? 12 : 10);
    map.panTo(citiesData[activeBranch]);
  }, [activeBranch, map, widowSize]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_MAP_KEY,
  });

  return (
    <GoogleMapStyled>
      <div className="contentContainer">
        <div className="contentWrapper">
          <h2 className="typoColorBlack typoTitleSecondary branchesTitle">{t('branches.title')}</h2>

          <div className="map">
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={widowSize.width >= 767 ? desktopMapStyles : mobileMapStyles}
                center={citiesData[activeBranch]}
                onLoad={(_map) => setMap(_map)}
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
            )}
            <div className="branchesAddress">
              <h2 className="typoColorBlack typoTitleSecondary">
                {t(`branches.${activeBranch}.city`)}
              </h2>
              <div className="mobileContainer">
                {citiesData[activeBranch].phoneNumbers.map((number) => (
                  <div key={uuidv4()} className="mobileNumber">
                    {number}
                  </div>
                ))}
              </div>
              <div className="addressesContainer">
                {branches.map((branch, index) => (
                  <div
                    key={branch.id}
                    onClick={() => {
                      map.setZoom(15);
                      map.panTo(branch.coordinates);
                      setActiveAddress(index);
                    }}
                    className="branch"
                  >
                    <i
                      className={
                        activeAddress === index
                          ? 'icon-map-pin-fill iconPin'
                          : 'icon-map-pin iconPin'
                      }
                    />
                    <div>
                      <div className={activeAddress === index ? 'branchNameActive' : 'branchName'}>
                        {t(`${branch.name}`)}
                      </div>
                      <div className="branchAddress">{t(`${branch.address}`)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </GoogleMapStyled>
  );
};

GoogleMapComponent.propTypes = {
  activeBranch: PropTypes.string.isRequired,
};

export default GoogleMapComponent;
