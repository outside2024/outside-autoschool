import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import StyledHeader from './Header.styles';
import { citiesData } from '../GoogleMap/data';
import CitySelect from './components/CitySelect';
// import useWindowSize from '@/hooks/useWindowSize';
import { LSGet, LSSet } from '@/global/helpers/helpers';
import { routsBranches, routsDnipro, socialLinksData } from '@/global/constants/contants';

export const HeaderTypes = { LIGHT: 'light', DARK: 'dark' };

const routes = [
  { name: 'online', url: '/online' },
  { name: 'branches', children: citiesData },
  { name: 'tests', url: '/tests' },
  { name: 'about', url: '/about' },
  { name: 'blog', url: '/blog' },
];

//! TODO: mobile & tablet header, menu anomations,city detector, choosen city provider

const Header = ({ headerType }) => {
  const { t } = useTranslation();
  // const widowSize = useWindowSize();
  const { locale, asPath } = useRouter();
  const citiesOptions = [
    {
      value: 'dnipro',
      label: t('branches.dnipro.city'),
    },
    {
      value: 'gvardiyske',
      label: t('branches.gvardiyske.city'),
    },
    {
      value: 'pavlograd',
      label: t('branches.pavlograd.city'),
    },
    {
      value: 'obuhivka',
      label: t('branches.obuhivka.city'),
    },
    {
      value: 'novomoskovsk',
      label: t('branches.novomoskovsk.city'),
    },
    {
      value: 'pidhorodne',
      label: t('branches.pidhorodne.city'),
    },
    {
      value: 'nikopol',
      label: t('branches.nikopol.city'),
    },
    {
      value: 'ilarionove',
      label: t('branches.ilarionove.city'),
    },
    {
      value: 'preshchepyno',
      label: t('branches.preshchepyno.city'),
    },
    {
      value: 'chumaky',
      label: t('branches.chumaky.city'),
    },
    {
      value: 'zaporizhya',
      label: t('branches.zaporizhya.city'),
    },
    {
      value: 'kryvyi_rig',
      label: t('branches.kryvyi_rig.city'),
    },
    {
      value: 'kharkiv',
      label: t('branches.kharkiv.city'),
    },
  ];

  const [currentCity, setCurrentCity] = useState(null);
  const [showBranchesBlock, setShowBranchesBlock] = useState(false);
  const [showDiproBranchesBlock, setShowDiproBranchesBlock] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const savedCity = LSGet('city');
    if (savedCity) {
      setCurrentCity(savedCity);
    } else {
      setCurrentCity(citiesOptions[0].value);
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowBranchesBlock(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const handleCityChange = (e) => {
    setCurrentCity(e.value);
    LSSet('city', e.value);
  };

  const getSelectedOption = () => citiesOptions.find((option) => option.value === currentCity);

  return (
    <StyledHeader
      light={headerType === HeaderTypes.LIGHT}
      brancheswidth={showDiproBranchesBlock ? '60%' : '100%'}
      className="contentContainer"
    >
      <div className="contentWrapper headerWrapper">
        <Link className="companyLogo" href="/" locale={locale}>
          <Image
            src={headerType === HeaderTypes.LIGHT ? '/logo-light.png' : '/logo-dark.png'}
            width={42}
            height={42}
            quality={100}
            alt="company logo"
            priority
          />
        </Link>
        <nav className="navBlock">
          {routes.map((route) =>
            route?.url ? (
              <Link key={uuidv4()} href={route.url}>
                <p className="typoHeaderLink link linkText">{t(`navigation.${route.name}`)}</p>
              </Link>
            ) : (
              <div
                key={uuidv4()}
                className="typoHeaderLink link linkText"
                onClick={() => {
                  setShowBranchesBlock(!showBranchesBlock);
                }}
              >
                <p className="">{t(`navigation.${route.name}`)} </p>{' '}
                <i className="icon-angle-down icon" />
              </div>
            ),
          )}
        </nav>
        <div className="cityBlock">
          <p className="typoHeaderLink linkText">{t(`navigation.chooseCity`)}</p>
          <CitySelect
            light={headerType === HeaderTypes.LIGHT}
            selectOptions={citiesOptions}
            selectedOption={getSelectedOption()}
            handleChange={handleCityChange}
          />
        </div>
        <div className="socialLngBlock">
          <div className="socialBlock">
            {socialLinksData.map((socialLink) => (
              <Link
                key={uuidv4()}
                href={socialLink.path}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i className={`${socialLink.icon} iconSocial`} />
              </Link>
            ))}
          </div>
          <div className="langBlock">
            <Link className={locale === 'en' ? 'disabled' : ''} href={asPath} locale="en">
              <p className={`typoHeaderLink link linkText ${locale === 'en' ? 'active' : ''}`}>
                en
              </p>
            </Link>
            <span className="typoHeaderLink  linkText">/</span>
            <Link className={locale === 'uk' ? 'disabled' : ''} href={asPath} locale="uk">
              <p className={`typoHeaderLink link linkText ${locale === 'uk' ? 'active' : ''}`}>
                ua
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`branchesBlock contentWrapper ${showBranchesBlock ? '' : 'hidden'}`}
      >
        <div className="branchesWrapper">
          {routsBranches.map((branch) =>
            branch?.path ? (
              <Link key={uuidv4()} href={branch.path}>
                <p className="typoHeaderBranchLink link linkText">{t(branch.text)}</p>
              </Link>
            ) : (
              <div
                key={uuidv4()}
                className="typoHeaderBranchLink link linkText"
                onClick={() => {
                  setShowDiproBranchesBlock(!showDiproBranchesBlock);
                }}
              >
                <p className="">{t(branch.text)} </p> <i className="icon-angle-down icon-right" />
              </div>
            ),
          )}
        </div>
        <div className={`subBranchesWrapper ${showDiproBranchesBlock ? '' : 'hidden'}`}>
          {routsDnipro.map((branch) => (
            <Link key={uuidv4()} href={branch.path}>
              <p className="typoHeaderBranchLink link linkText">{t(branch.text)}</p>
            </Link>
          ))}
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

Header.propTypes = {
  headerType: PropTypes.oneOf([HeaderTypes.LIGHT, HeaderTypes.DARK]),
};

Header.defaultProps = {
  headerType: HeaderTypes.DARK,
};
