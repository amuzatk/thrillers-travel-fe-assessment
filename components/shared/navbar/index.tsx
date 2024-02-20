import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "../../../styles/dashboard/Navbar.module.scss";
import Logo from "../../../public/assets/logo/LogoSqr.webp";
import Bell from "../../../public/assets/icons/BellIcon2.webp";
import ArrowLeft from '../../../public/assets/icons/arrowLeft.png'
import Dropdown from "../../../public/assets/icons/Dropdown2.webp";
import UserIcon from "../../../public/assets/icons/Avatar2.webp";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = ({
  handleOpenMenu,
}: {
  menuConstant?: boolean;
  handleOpenMenu: () => void;
}) => {
  const [nav, setNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setPageTitle(getPageTitle(router.pathname));
  }, [router.pathname]);

  const getPageTitle = (path) => {
    const pageMenus = [
      { title: "Dashboard", path: "/dashboard" },
      { title: "Transactions", path: "/dashboard/transactions" },
      { title: "Transfers", path: "/dashboard/transfers" },
      { title: "Settings", path: "/dashboard/settings" },
      { title: "Accounts", path: "/dashboard/accounts" },
    ];

    const menu = pageMenus.find((menu) => menu.path === path);
    return menu ? menu.title : "";
  };


  return (
    <>
       {screenWidth > 768 || router.pathname === "/dashboard" ? (
    <header className={styles.navbar}>
      {screenWidth <= 768 && (
        <AiOutlineMenu size={25} onClick={handleOpenMenu} />
      )}
      <a href="/dashboard">
        <Image src={Logo} alt="logo" className={styles.log} />
      </a>
      <nav>
        <ul
          className={nav ? [styles.menu, styles.active].join(" ") : styles.menu}
        >
          <li>
            <Image className={styles.bell} src={Bell} alt="Bell Icon" width={17.48} height={19} />
          </li>
          <li className={styles.user}>
            <div className={styles.info}>
              <Image
                src={UserIcon}
                alt="Bell Icon"
                width={50}
                height={50}
              />
              <span className={styles.drop}>
                <Image
                  src={Dropdown}
                  alt="Bell Icon"
                  width={8}
                  height={4.76}
                />
              </span>
            </div>
          </li>
        </ul>
      </nav>
      <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
       ) : null }
          {/* Conditionally render Back button and menu title */}
          {screenWidth <= 768 && router.pathname !== "/dashboard" && (
        <div 
        className={styles.backContainer}>
          <Link href={"/dashboard"}>
          <Image src={ArrowLeft} width={24} height={24} alt="Back Icon" />
          </Link>
          <p>{pageTitle}</p>
        </div>
      )}
    </>
  );
};

export default NavBar;