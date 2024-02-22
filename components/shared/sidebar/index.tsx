import React from "react";
import styles from "../../../styles/dashboard/Sidebar.module.scss";
import GlobeIcon from "../../../public/assets/icons/globeIcon.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import SelectTemplate from "../form/SelectTemplate";
import { DASHBOARD_LINKS } from "../../../navigations";

interface LinkItem {
  TITLE: string;
  LINK: string;
  SLUG: string;
  ISDASHBOARD?: boolean;
  ISCUSTOMER?: boolean;
  ISBUSINESS?: boolean;
  ISSETTINGS?: boolean;
  ISLOGOUT?: boolean;

  ICON: (isActive: boolean) => JSX.Element;
}

const SideBar = () => {
  // const [sideNav] = useState(true);
  const router = useRouter();

  // const onLogout = () => {
  //   // Display a success message
  //   toastHandler.success('Logout successful');

  //   // Redirect to login or any desired page
  //   router.push('/');
  // };

  // Group links based on their categories
  const dashboardLinks = DASHBOARD_LINKS.filter((link: LinkItem) => link.ISDASHBOARD);
  const renderLinks = (links: LinkItem[]) => {
    return links.map((menu: LinkItem) => {
      const isActive = router.pathname === menu.LINK;

      const handleContent = () => (
        <div
          style={{
            backgroundColor: isActive ? '#3976E8' : '#FFFFFF',
            display: "flex",
            flexDirection: "row",
            columnGap: "12px",
            paddingLeft: "32px",
            minHeight:"52px",
            alignItems:"center",
          }}>
          {menu.ICON(isActive)}
          <div
            style={{
              color: isActive ? '#FFFFFF' : '#04004D',
            }}
            className={styles.menuTitle}>
            {menu.TITLE}
          </div>
        </div>
      );

      return (
        <div className={styles.items} key={menu.SLUG}>
          {menu.ISLOGOUT ? (
            <div className={styles.item} >
              {handleContent()}
            </div>
          ) : (
            <Link className={styles.item} href={menu.LINK}>
              {handleContent()}
            </Link>
          )}
        </div>
      );
    });
  };

  return (
    <>
    <div className={styles.main}>
      
      <div className={styles.brief}>
        <Image src={GlobeIcon} width={16} height={16} alt="Briefcase" />
        <SelectTemplate 
        // onChange={onOrganizationChange}
        //  selectedOrganization={selectedOrganization}
         />
      </div>
      <div className={styles.globe}>
      <Image src={GlobeIcon} width={24} height={24} alt="GlobeIcon" />
      <p>Get Started</p> 
      </div>
      <div className={styles.menu}>
      <div>
          {renderLinks(dashboardLinks)}
        </div>
      </div>
    </div>
    </>
  );
};

export default SideBar;