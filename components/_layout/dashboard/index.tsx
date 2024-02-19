import React, { ReactNode, useEffect, useState } from "react";
import styles from "../../../styles/layouts/Layout.module.scss";
import { Drawer } from "antd";
import NavBar from "../../shared/navbar";
import SideBar from "../../shared/sidebar";
import DashboardInfo from "../../../screens/userDetailPage/userMainPage";

type Props = {
  children?: ReactNode;
  title?: string;
  isDetailPage: boolean;
  selectedOrganization?: string;
  onOrganizationChange?: (newOrganization: string) => void;
  // onSearchResultsChange?: (searchResult: User[]) => void;
};

const Layout = ({
  children,
  title = "This is the default title",
  isDetailPage = false,
  selectedOrganization,
  onOrganizationChange,
  // onSearchResultsChange,
}: Props) => {
  const [mainDash, setMainDash] = useState(!isDetailPage);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Close mobile menu
  const handleCloseMenu = () => setMobileMenu(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(typeof window !== "undefined" ? window.innerWidth : 0);
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  useEffect(() => {
    setMainDash(!isDetailPage);
  }, [isDetailPage]);

  return (
    <div>
      <NavBar
        handleOpenMenu={() => setMobileMenu(true)}
        // onSearchResultsChange={onSearchResultsChange}
      />
      <div className={styles.main}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            {/* ASIDE MOBILE */}
            {screenWidth <= 768 && (
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
              marginTop: "60px",
            }}
            className={`${styles.content} ${
              mainDash ? styles.mainDashContent : ""
            }`}
          >
            {mainDash ? (
              <>
               <DashboardInfo
              />
              </>
            ) : null}
            {/* Render child components and pass retrieved mock data */}
            <div className={styles.body}>
              {React.Children.map(children, (child) => {
                return React.cloneElement(child as React.ReactElement, {
                  // mockTableData: retrievedMockTableData,
                  // mockBarChartData: retrievedMockBarChartData,
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;



