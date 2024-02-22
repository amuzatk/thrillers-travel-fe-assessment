import React, { ReactNode, useEffect, useState } from "react";
import styles from "../../../styles/layouts/Layout.module.scss";
import { Drawer } from "antd";
import NavBar from "../../shared/navbar";
import SideBar from "../../shared/sidebar";
import DashboardInfo from "../../../screens/userDetailPage/userMainPage";

type Props = {
  children?: ReactNode;
  title?: string;
  isNotDashboard: boolean;
  // isDashboard: boolean;
};

const Layout = ({
  children,
  title = "This is the default title",
  isNotDashboard = false,
  // isDashboard = false,
}: Props) => {
  const [mainDash, setMainDash] = useState(!isNotDashboard);
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
    setMainDash(!isNotDashboard);
  }, [isNotDashboard]);

  return (
    <div>
      <NavBar
        handleOpenMenu={() => setMobileMenu(true)}
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
                <SideBar/>
              </Drawer>
            )}
            {/* ASIDE WEB */}
            <div className={styles.webDash}>
              <SideBar/>
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
               <DashboardInfo />
               {/* <h2>TEST</h2> */}
              </>
            ) : 
            null
            // <h1>NOT MAIN DASHBOARD</h1>
            }
            <div className={styles.body}>
              {React.Children.map(children, (child) => {
                return React.cloneElement(child as React.ReactElement, {
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



