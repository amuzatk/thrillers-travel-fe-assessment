import React, { useState } from "react";
import styles from "../../../styles/dashboard/Sidebar.module.scss";
import Briefcase from "../../../public/assets/icons/Briefcase.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Divider } from "antd";
import SelectTemplate from "../form/SelectTemplate";
import { toastHandler } from "../../../helpers/toastHandler";
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

type SideBarProps = {
  selectedOrganization: string;
  onOrganizationChange: (newOrganization: string) => void;
};

const SideBar = ({ selectedOrganization, onOrganizationChange }: SideBarProps) => {
  // const [sideNav] = useState(true);
  const router = useRouter();

  const onLogout = () => {
    // Display a success message
    toastHandler.success('Logout successful');

    // Redirect to login or any desired page
    router.push('/');
  };

  // Group links based on their categories
  const dashboardLinks = DASHBOARD_LINKS.filter((link: LinkItem) => link.ISDASHBOARD);
  const customerLinks = DASHBOARD_LINKS.filter((link: LinkItem) => link.ISCUSTOMER);
  const businessLinks = DASHBOARD_LINKS.filter((link: LinkItem) => link.ISBUSINESS);
  const settingsLinks = DASHBOARD_LINKS.filter((link: LinkItem) => link.ISSETTINGS);
  const logoutLinks = DASHBOARD_LINKS.filter((link: LinkItem) => link.ISLOGOUT);

  const renderLinks = (links: LinkItem[]) => {
    return links.map((menu: LinkItem) => {
      const isActive = router.pathname === menu.LINK;

      const handleContent = () => (
        <div
          style={{
            // backgroundColor: isActive ? '#F3FCFC' : 'white',
            backgroundColor: isActive ? '#3976E8' : 'white',
            // borderLeft: isActive ? '3px solid #39CDCC' : 'white',
            display: "flex",
            flexDirection: "row",
            columnGap: "12px",
            paddingLeft: "32px",
            minHeight:"52px",
            alignItems:"center"
          }}>
          {menu.ICON(isActive)}
          <div
            style={{
              color: isActive ? '#213F7D' : '#8294B6',
            }}
            className={styles.menuTitle}>
            {menu.TITLE}
          </div>
        </div>
      );

      const handleClick = () => {
        if (menu.ISLOGOUT) {
          onLogout(); // Call the onLogout function for logout links
        }
      };

      return (
        <div className={styles.items} key={menu.SLUG}>
          {menu.ISLOGOUT ? (
            <div className={styles.item} onClick={handleClick}>
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
        <Image src={Briefcase} width={16} height={16} alt="Briefcase" />
        <SelectTemplate 
        onChange={onOrganizationChange}
         selectedOrganization={selectedOrganization}
         />
      </div>
      <div className={styles.menu}>
      <div>
          {renderLinks(dashboardLinks)}
        </div>
        {/* <div style={{
          cursor:"pointer"
          }}>
          {renderLinks(logoutLinks)}
        </div> */}
      </div>
    </div>
    </>
  );
};

export default SideBar;