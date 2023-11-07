import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import StyledFooter from '@/components/Footer/Footer.styled';
import companyLogo from '../../../public/Logo.png';
import { routesMenu, routsBranches, routsDnipro } from '@/global/constants/routes';
import { socialLinksData } from '@/components/Footer/data';

const socialIcons = (title) => (
  <>
    <div className="footerSocialsText">{title}</div>
    <div className="footerIcons">
      {socialLinksData.map((social) => (
        <Link
          key={social.icon}
          href={social.path}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <i className={`${social.icon} footerIcon`} />
        </Link>
      ))}
    </div>
  </>
);

const Footer = () => {
  const { t } = useTranslation();
  return (
    <StyledFooter className="contentContainer">
      <div className="contentWrapper footer">
        <div className="wrapper">
          <div className="firstColumn">
            <Link href="/">
              <Image
                src={companyLogo}
                width={80}
                height={80}
                alt="comapny logo"
                className="footerLogo"
              />
            </Link>
            <div className="footerSocialsContainer">{socialIcons(t('footer.socials'))}</div>
          </div>
          <div className="footerMenu">
            {routesMenu.map((route) => (
              <Link href={route.path} key={route.path} className="footerRouteNav">
                {t(`${route.text}`)}
              </Link>
            ))}
          </div>

          <div className="footerBranchesContainer">
            <div className="footerBranchesTitle">{t('branches.title')}</div>
            <div className="footerBranches">
              {routsBranches.map((route) => (
                <Link href={route.path} key={route.path} className="footerRoute">
                  {t(`${route.text}`)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="footerBranchesTitle">{t('footer.schools_dnipro')}</div>
            <div className="footerBranches">
              {routsDnipro.map((route) => (
                <Link href={route.path} key={route.path} className="footerRoute">
                  {t(`${route.text}`)}
                </Link>
              ))}
            </div>
          </div>
          <div className="mobileSocials">{socialIcons(t('footer.socials'))}</div>
        </div>
      </div>
      <div className="contentWrapper">
        <div className="footerRights">
          ©{new Date().getFullYear()} Company Name. All rights reserved
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
