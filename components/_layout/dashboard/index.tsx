
import React, { ReactNode, useEffect, useState } from "react";
import styles from "../../../styles/layouts/Layout.module.scss";
import { Drawer } from "antd";
import { User } from "../../../interfaces";
// import { AnalyticsData, useAnalyticsData } from "../../../utils/sample-data";
import NavBar from "../../shared/navbar";
import SideBar from "../../shared/sidebar";
import UserDetailMainPage from "../../../screens/userDetailPage/userMainPage";

type Props = {
  children?: ReactNode;
  title?: string;
  isDetailPage: boolean;
  selectedOrganization?: string,
  onOrganizationChange?: (newOrganization: string) => void;
  onSearchResultsChange?: (searcResult: User[]) => void;
  // searchResults?: User[]; // Define the searchResults prop
  // pageTitle?: string; // Add pageTitle prop
  // dummyVariable?: number; 
  // onForceRerender?: (newDummyVariable: number) => void; // Define the callback function prop
};

const Layout = ({
  children,
  title = "This is the default title",
  isDetailPage = false,
  selectedOrganization,
  onOrganizationChange,
  onSearchResultsChange,
  // searchResults, // Use the searchResults prop in the component
  // pageTitle = "Analytics", // Default to "Dashboard" if not provided
  // dummyVariable,
  // onForceRerender, // Receive the callback function prop
  
}: Props) => {
  const [mainDash, setMainDash] = useState(!isDetailPage);
  const [mobileMenu, setMobileMenu] = useState(false);
  // const [data, setData] = useState<AnalyticsData[]>([]);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const analyticsData = await useAnalyticsData();
  //     setData(analyticsData);
  //   };

  //   fetchData();
  // }, [dummyVariable, onForceRerender]);
  // Close mobile menu
  const handleCloseMenu = () => setMobileMenu(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  useEffect(() => {
    setMainDash(!isDetailPage);
  }, [isDetailPage]);

  return (
    <div>
      <NavBar 
      handleOpenMenu={() => setMobileMenu(true)}
      onSearchResultsChange={onSearchResultsChange}
      />
      <div className={styles.main}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            {/* ASIDE MOBILE */}
            {screenWidth <= 820 && (
              <Drawer
                onClose={handleCloseMenu}
                placement="left"
                open={mobileMenu}
                closable={true}
                width={260}
              >
            <SideBar
                  selectedOrganization={selectedOrganization}
                  onOrganizationChange={onOrganizationChange}
                />
              </Drawer>
            )}
            {/* ASIDE WEB */}
            <div className={styles.webDash}>
            <SideBar
                  selectedOrganization={selectedOrganization}
                  onOrganizationChange={onOrganizationChange}
                />
            </div>
          </div>
          <div 
          style={{
            marginTop:"60px",
          }} 
          className={`${styles.content} ${mainDash ? styles.mainDashContent : ''}`}
          >
            {mainDash ? (
              <>
                <UserDetailMainPage />
              </>
            ) : (
              null

            )}
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;