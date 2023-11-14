import { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import StyledHeader from './Header.styles';
import { citiesData } from '../GoogleMap/data';
import CitySelect from './components/CitySelect';
import useWindowSize from '@/hooks/useWindowSize';
import { LSGet, LSSet } from '@/global/helpers/helpers';
import { routsBranches } from '@/global/constants/contants';
import { routsDnipro } from '@/global/constants/routes';
import { socialLinksData } from '@/global/constants/dataSocialLinks';
import { CurrentCityContext } from '@/layouts/RootLayout/RootLayout';

export const HeaderTypes = { LIGHT: 'light', DARK: 'dark' };

const routes = [
  { name: 'online', url: '/online' },
  { name: 'branches', children: citiesData },
  { name: 'tests', url: '/tests' },
  { name: 'about', url: '/about' },
  { name: 'blog', url: '/blog' },
];

//! TODO: city detector

const Header = ({ headerType }) => {
  const { t } = useTranslation();
  const widowSize = useWindowSize();
  const { locale, asPath, pathname } = useRouter();
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

  const menuTabs = { NAV: 'navigation', BRANCHES: 'branches', SUBBRANCHES: 'subbranches' };

  const { currentCity, setCurrentCity } = useContext(CurrentCityContext);
  const [showBranchesBlock, setShowBranchesBlock] = useState(false);
  const [showDniproBranchesBlock, setShowDniproBranchesBlock] = useState(false);
  const [tabletMenuOpen, setTabletMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const branchesRef = useRef(null);
  const subBranchesRef = useRef(null);
  const mobileNavRef = useRef(null);
  const [mobileMenuCurrentTab, setMobileMenuCurrentTab] = useState(menuTabs.NAV);
  const [direction, setDirection] = useState('right');

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
        if (widowSize.width < 1025) {
          setTabletMenuOpen(false);
        } else {
          setShowBranchesBlock(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, widowSize]);

  useEffect(() => {
    if (widowSize.width < 1025) {
      setTabletMenuOpen(false);
    } else {
      setShowBranchesBlock(false);
    }
    // eslint-disable-next-line
  }, [pathname]);

  const handleCityChange = (e) => {
    setCurrentCity(e.value);
    LSSet('city', e.value);
  };

  const getSelectedOption = () => citiesOptions.find((option) => option.value === currentCity);

  return (
    <StyledHeader
      $light={!!(headerType === HeaderTypes.LIGHT)}
      $brancheswidth={showDniproBranchesBlock ? '60%' : '100%'}
      className="contentContainer"
    >
      <div className="contentWrapper headerWrapper">
        {/* !desctop header */}
        {widowSize.width > 1024 && (
          <>
            <Link className="companyLogo" href="/" locale={locale}>
              <Image
                src={headerType === HeaderTypes.LIGHT ? '/logo-light.png' : '/logo-dark.png'}
                width={42}
                height={42}
                quality={100}
                alt="company logo"
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
              <p className="typoHeaderChooseCity linkText">{t(`navigation.chooseCity`)}</p>
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
                <Link className={locale === 'en' ? 'disabled' : ''} href={asPath || ''} locale="en">
                  <p className={`typoHeaderLink link linkText ${locale === 'en' ? 'active' : ''}`}>
                    en
                  </p>
                </Link>
                <span className="typoHeaderLink  linkText">/</span>
                <Link className={locale === 'uk' ? 'disabled' : ''} href={asPath || ''} locale="uk">
                  <p className={`typoHeaderLink link linkText ${locale === 'uk' ? 'active' : ''}`}>
                    ua
                  </p>
                </Link>
              </div>
            </div>
          </>
        )}
        {!tabletMenuOpen && widowSize.width < 1025 && (
          <div className="menuButton" onClick={() => setTabletMenuOpen(true)}>
            <i className="icon-burger iconMenu" />
          </div>
        )}
      </div>
      <CSSTransition
        nodeRef={menuRef}
        in={
          (widowSize.width > 1024 && showBranchesBlock) ||
          (widowSize.width < 1025 && tabletMenuOpen)
        }
        timeout={500}
        classNames="slideDownAnimation"
        unmountOnExit
      >
        <div
          ref={menuRef}
          className={`menuWrapper contentWrapper ${
            ((widowSize.width > 1024 && showBranchesBlock) ||
              (widowSize.width < 1025 && tabletMenuOpen)) &&
            'borderBottom'
          }`}
        >
          {/* !tablet header */}
          {widowSize.width < 1025 && widowSize.width > 767 && (
            <div className="tabletHeader">
              <div className="tabletHeaderLine">
                <div className="tabletlogoIconWrapper">
                  {tabletMenuOpen && widowSize.width < 1025 && (
                    <div className="menuButton" onClick={() => setTabletMenuOpen(false)}>
                      <i className="icon-close iconMenu" />
                    </div>
                  )}
                  <Link className="companyLogo" href="/" locale={locale}>
                    <Image
                      src={headerType === HeaderTypes.LIGHT ? '/logo-light.png' : '/logo-dark.png'}
                      width={42}
                      height={42}
                      quality={100}
                      alt="company logo"
                    />
                  </Link>
                </div>
                <div className="cityBlock">
                  <p className="typoHeaderChooseCity linkText">{t(`navigation.chooseCity`)}</p>
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
                    <Link
                      className={locale === 'en' ? 'disabled' : ''}
                      href={asPath || ''}
                      locale="en"
                    >
                      <p
                        className={`typoHeaderLink link linkText ${
                          locale === 'en' ? 'active' : ''
                        }`}
                      >
                        en
                      </p>
                    </Link>
                    <span className="typoHeaderLink  linkText">/</span>
                    <Link
                      className={locale === 'uk' ? 'disabled' : ''}
                      href={asPath || ''}
                      locale="uk"
                    >
                      <p
                        className={`typoHeaderLink link linkText ${
                          locale === 'uk' ? 'active' : ''
                        }`}
                      >
                        ua
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <nav className="navBlock">
                {routes.map((route) =>
                  route?.url ? (
                    <Link key={uuidv4()} href={route.url}>
                      <p className="typoHeaderLink link linkText">
                        {t(`navigation.${route.name}`)}
                      </p>
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
            </div>
          )}
          {/* !tablet & desktop branches */}

          <CSSTransition
            nodeRef={branchesRef}
            in={showBranchesBlock && widowSize.width > 767}
            timeout={300}
            classNames="slideDownAnimation"
            unmountOnExit
          >
            <div ref={branchesRef} className="branchesBlock">
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
                        setShowDniproBranchesBlock(!showDniproBranchesBlock);
                      }}
                    >
                      <p className="">{t(branch.text)} </p>{' '}
                      <i className="icon-angle-down icon-right" />
                    </div>
                  ),
                )}
              </div>
              <CSSTransition
                nodeRef={subBranchesRef}
                in={showDniproBranchesBlock && widowSize.width > 767}
                timeout={200}
                classNames="slideRightAnimation"
                unmountOnExit
              >
                <div ref={subBranchesRef} className="subBranchesWrapper">
                  {routsDnipro.map((branch) => (
                    <Link key={uuidv4()} href={branch.path}>
                      <p className="typoHeaderBranchLink link linkText">{t(branch.text)}</p>
                    </Link>
                  ))}
                </div>
              </CSSTransition>
            </div>
          </CSSTransition>
          {/* !mobile header */}
          {widowSize.width < 768 && (
            <div className="mobileHeader">
              <div className="mobilelogoIconWrapper">
                <div className="menuButton" onClick={() => setTabletMenuOpen(false)}>
                  <i className="icon-close iconMenu" />
                </div>
                <Link className="companyLogo" href="/" locale={locale}>
                  <Image
                    src={headerType === HeaderTypes.LIGHT ? '/logo-light.png' : '/logo-dark.png'}
                    width={42}
                    height={42}
                    quality={100}
                    alt="company logo"
                  />
                </Link>
              </div>

              <SwitchTransition>
                <CSSTransition
                  key={mobileMenuCurrentTab}
                  nodeRef={mobileNavRef}
                  classNames={
                    direction === 'right' ? 'slideRightFastAnimation' : 'slideLeftFastAnimation'
                  }
                  unmountOnExit
                  addEndListener={(done) => {
                    mobileNavRef.current.addEventListener('transitionend', done, false);
                  }}
                >
                  <div ref={mobileNavRef}>
                    {mobileMenuCurrentTab === menuTabs.NAV && (
                      <>
                        <div className="mobileCityBlock">
                          <p className="typoHeaderChooseCity linkText">
                            {t(`navigation.chooseCity`)}
                          </p>
                          <CitySelect
                            light={headerType === HeaderTypes.LIGHT}
                            selectOptions={citiesOptions}
                            selectedOption={getSelectedOption()}
                            handleChange={handleCityChange}
                          />
                        </div>
                        <nav className="mobileNavBlock">
                          {routes.map((route) =>
                            route?.url ? (
                              <Link key={uuidv4()} href={route.url}>
                                <p className="typoHeaderLink link linkText mobileNavBlockItem">
                                  {t(`navigation.${route.name}`)}
                                </p>
                              </Link>
                            ) : (
                              <div
                                key={uuidv4()}
                                className="typoHeaderLink link linkText mobileNavBlockItem"
                                onClick={() => {
                                  setDirection('right');
                                  setMobileMenuCurrentTab(menuTabs.BRANCHES);
                                }}
                              >
                                <p className="">{t(`navigation.${route.name}`)} </p>{' '}
                                <i className="icon-angle-down icon-right" />
                              </div>
                            ),
                          )}
                        </nav>
                        <div className="mobileSocialLngBlock">
                          <div className="mobileSocialBlock">
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
                            <Link
                              className={locale === 'en' ? 'disabled' : ''}
                              href={asPath || ''}
                              locale="en"
                            >
                              <p
                                className={`typoHeaderLink link linkText ${
                                  locale === 'en' ? 'active' : ''
                                }`}
                              >
                                en
                              </p>
                            </Link>
                            <span className="typoHeaderLink  linkText">/</span>
                            <Link
                              className={locale === 'uk' ? 'disabled' : ''}
                              href={asPath || ''}
                              locale="uk"
                            >
                              <p
                                className={`typoHeaderLink link linkText ${
                                  locale === 'uk' ? 'active' : ''
                                }`}
                              >
                                ua
                              </p>
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                    {mobileMenuCurrentTab === menuTabs.BRANCHES && (
                      <>
                        <div
                          className="backButton"
                          onClick={() => {
                            setDirection('left');
                            setMobileMenuCurrentTab(menuTabs.NAV);
                          }}
                        >
                          <i className="icon-angle-down iconLeft" />
                        </div>

                        <div className="mobileBranchesWrapper">
                          {routsBranches.map((branch) =>
                            branch?.path ? (
                              <Link key={uuidv4()} href={branch.path}>
                                <p className="typoHeaderBranchLink link linkText mobileBranchesItem">
                                  {t(branch.text)}
                                </p>
                              </Link>
                            ) : (
                              <div
                                key={uuidv4()}
                                className="typoHeaderBranchLink link linkText mobileBranchesItem"
                                onClick={() => {
                                  setDirection('right');
                                  setMobileMenuCurrentTab(menuTabs.SUBBRANCHES);
                                }}
                              >
                                <p className="">{t(branch.text)} </p>{' '}
                                <i className="icon-angle-down icon-right" />
                              </div>
                            ),
                          )}
                        </div>
                      </>
                    )}
                    {mobileMenuCurrentTab === menuTabs.SUBBRANCHES && (
                      <>
                        <div
                          className="backButton"
                          onClick={() => {
                            setDirection('left');
                            setMobileMenuCurrentTab(menuTabs.BRANCHES);
                          }}
                        >
                          <i className="icon-angle-down iconLeft" />
                        </div>

                        <div className="mobileNavBlock">
                          {routsDnipro.map((branch) => (
                            <Link key={uuidv4()} href={branch.path}>
                              <p className="typoHeaderBranchLink link linkText mobileNavBlockItem">
                                {t(branch.text)}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>
          )}
        </div>
      </CSSTransition>
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
