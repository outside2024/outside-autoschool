import Image from 'next/image';
import {useTranslation} from "next-i18next";
import Link from "next/link";
import StyledFooter from "@/components/Footer/Footer.styled";
import companyLogo from "../../../public/Logo.png";
import {routesMenu, routsBranches, routsDnipro} from "@/components/Footer/routes";


const Footer = () => {
  const {t} = useTranslation();
  return (
    <StyledFooter className="contentContainer">
      <div className="contentWrapper footer">
        <div className="test">
          <div>
            <Image src={companyLogo} width={80} height={80} alt="comapny logo"/>
            <div className="footerSocialsText">{t('footer.socials')}</div>
            <div className="footerIcons">
              <Link href={process.env.NEXT_PUBLIC_FACEBOOK} target="_blank" rel="noopener noreferrer nofollow">
                <i className="icon-facebook footerIcon"/>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_INSTAGRAM} target="_blank" rel="noopener noreferrer nofollow">
                <i className="icon-instagram footerIcon"/>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_TIKTOK} target="_blank" rel="noopener noreferrer nofollow">
                <i className="icon-tiktok footerIcon"/>
              </Link>
            </div>
          </div>
          <div className="footerMenu">
            {routesMenu.map(route => (
              <Link href={route.path} key={route.path} className="footerRouteNav">
                {t(`${route.text}`)}
              </Link>
            ))}
          </div>

          <div className="footerBranchesContainer">
            <div className="footerBranchesTitle">{t('branches.title')}</div>
            <div className="footerBranches">
              {routsBranches.map(route => (
                <Link href={route.path} key={route.path} className="footerRoute">
                  {t(`${route.text}`)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="footerBranchesTitle">{t('footer.schools_dnipro')}</div>
            <div className="footerBranches">
              {routsDnipro.map(route => (
                <Link href={route.path} key={route.path} className="footerRoute">
                  {t(`${route.text}`)}
                </Link>
              ))}
              </div>

          </div>
        </div>
      </div>
      <div className="contentWrapper">
        <div className="footerRights">
          ©{new Date().getFullYear()} Company Name. All rights reserved
        </div>
      </div>

</StyledFooter>
)
}

export default Footer;