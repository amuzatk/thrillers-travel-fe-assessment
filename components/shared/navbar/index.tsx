
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
      {screenWidth <= 820 && (
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



// import React, { useEffect, useState } from "react";
// import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
// import styles from "../../../styles/dashboard/Navbar.module.scss";
// import Logo from "../../../public/assets/logo/logo.webp";
// import Bell from "../../../public/assets/icons/bell.webp";
// import Dropdown from "../../../public/assets/icons/Dropdown.webp";
// import UserIcon from "../../../public/assets/images/LoginUser.webp";
// import Image from "next/image";
// import { User } from "../../../interfaces";

// const NavBar = ({
//   handleOpenMenu,
//   menuConstant,
//   onSearchResultsChange, // Add this prop to pass search results to parent component
// }: {
//   menuConstant?: boolean;
//   handleOpenMenu: () => void;
//   onSearchResultsChange: (results: User[]) => void;
// }) => {
//   const [nav, setNav] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState<User[]>([]);
//   const [screenWidth, setScreenWidth] = useState(
//     typeof window !== 'undefined' ? window.innerWidth : 0
//   );

//   // Retrieving users from local storage on the client side
//   const storedUsers =
//     typeof window !== 'undefined'
//       ? JSON.parse(localStorage.getItem('users') || '[]')
//       : [];


//   useEffect(() => {
//     const handleResize = () => {
//       setScreenWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const query = event.target.value.toLowerCase();
  
//     // Update the searchQuery state
//     setSearchQuery(query);
  
//     // Filter users from local storage based on the search query
//     const results = storedUsers.filter(
//       (user) =>
//         user.profile.firstName.toLowerCase().includes(query) ||
//         user.profile.lastName.toLowerCase().includes(query) ||
//         user.orgName.toLowerCase().includes(query)
//       // Add more conditions based on your user data structure
//     );
  
//     // Callback to the parent component with the search results
//     onSearchResultsChange(results);
//   };

//   return (
//     <header className={styles.navbar}>
//       {screenWidth <= 820 && (
//         <AiOutlineMenu size={25} onClick={handleOpenMenu} />
//       )}
//       <a href="/dashboard">
//         <Image src={Logo} alt="logo" className={styles.log} />
//       </a>
//       <div className={styles.search}>
//         <div className={styles.input}>
//           <input
//             type="text"
//             className={styles.web}
//             placeholder="Search for anything"
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//           <input
//             type="text"
//             className={styles.mobile}
//             value={searchQuery}
//             // value={searchResults}
            
//             onChange={handleSearchChange}
//           />
//         </div>

//         <div className={styles.icon}>
//           <AiOutlineSearch />
//         </div>
//       </div>
//       <nav>
//         <ul
//           className={nav ? [styles.menu, styles.active].join(" ") : styles.menu}
//         >
//           <li className={styles.docs}>
//             <a href="/dashboard">Docs</a>
//           </li>
//           <li>
//             <Image src={Bell} alt="Bell Icon" width={26} height={26} />
//           </li>
//           <li className={styles.user}>
//             <div className={styles.info}>
//               <Image
//                 src={UserIcon}
//                 alt="Bell Icon"
//                 width={48}
//                 height={48}
//               />
//               <span className={styles.name}>Adedeji</span>
//               <span className={styles.drop}>
//                 <Image
//                   src={Dropdown}
//                   alt="Bell Icon"
//                   width={20}
//                   height={20}
//                 />
//               </span>
//             </div>
//           </li>
//         </ul>
//       </nav>
//       <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
//         {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
//       </div>
//     </header>
//   );
// };

// export default NavBar;