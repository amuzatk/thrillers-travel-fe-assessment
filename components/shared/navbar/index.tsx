
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import styles from "../../../styles/dashboard/Navbar.module.scss";
import Logo from "../../../public/assets/logo/LogoSqr.webp";
import Bell from "../../../public/assets/icons/BellIcon2.webp";
import Dropdown from "../../../public/assets/icons/Dropdown2.webp";
import UserIcon from "../../../public/assets/icons/Avatar2.webp";
import Image from "next/image";

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


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
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
  );
};

export default NavBar;