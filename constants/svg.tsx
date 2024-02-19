import React from "react";

export const DashboardIcon = ({ isActive }: { isActive?: boolean }) => (
<svg width="24" height="24" viewBox="0 0 24 24" 
// fill="none" 
fill={isActive ? 'none' : '#04004D'}
xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" 
stroke="white" 
strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z" 
stroke="white"
 strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" 
stroke="white"
 strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    );

export const AccountIcon = ({ isActive }: { isActive?: boolean }) => (
    <svg width="24" height="24" 
    viewBox="0 0 24 24" 
    // fill="none"
fill={isActive ? 'none' : 'none'}
     xmlns="http://www.w3.org/2000/svg">
<path d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z" 
// stroke="#04004D"
// stroke="white" 
stroke={!isActive ? '#04004D' : 'white'} // Outline color
 strokeWidth="1.5" 
 strokeLinecap="round" 
 strokeLinejoin="round"
 />
<path d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008" 
// stroke="#04004D"
// stroke="white" 
stroke={!isActive ? '#04004D' : 'white'} // Outline color
 strokeWidth="1.5" 
 strokeLinecap="round" 
 strokeLinejoin="round"
 />
<path d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z" 
// stroke="#04004D"
// stroke="white" 
stroke={!isActive ? '#04004D' : 'white'} // Outline color
 strokeWidth="1.5" 
 strokeLinecap="round" 
 strokeLinejoin="round"
 />
<path d="M7 12H14" 
// stroke="#04004D"
// stroke="white" 
stroke={!isActive ? '#04004D' : 'white'} // Outline color
 strokeWidth="1.5" 
 strokeLinecap="round" 
 strokeLinejoin="round"
 />
</svg>
    );

export const TransferIcon = ({ isActive }: { isActive?: boolean }) => (
<svg width="24" height="24" viewBox="0 0 24 24" 
// fill="none"
fill={isActive ? 'none' : 'none'}
 xmlns="http://www.w3.org/2000/svg">
<path d="M6 6L8 4M8 4L6 2M8 4H6C3.79086 4 2 5.79086 2 8M18 18L16 20M16 20L18 22M16 20H18C20.2091 20 22 18.2091 22 16M10.189 6.5C10.8551 3.91216 13.2042 2 16 2C19.3137 2 22 4.68629 22 8C22 10.7957 20.0879 13.1449 17.5001 13.811M14 16C14 19.3137 11.3137 22 8 22C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16Z"
//  stroke="#23262F" 
// stroke="white" 
stroke={!isActive ? '#04004D' : 'white'} // Outline color
strokeWidth="1.5" 
strokeLinecap="round" 
strokeLinejoin="round"
/>
</svg>
  );

export const TransactionIcon = ({ isActive }: { isActive?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" 
fill={isActive ? 'none' : 'none'}
  xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" 
//  stroke="#292D32" 
stroke={!isActive ? '#04004D' : 'white'} // Outline color
 strokeWidth="1.5" 
 strokeLinecap="round" 
 strokeLinejoin="round"
 />
<path d="M15.75 9H8.25" 
// stroke="#292D32" 
stroke={!isActive ? '#04004D' : 'white'} // Outline color
strokeWidth="1.5" 
strokeLinecap="round" 
strokeLinejoin="round"
/>
<path d="M15.75 15H8.25" 
// stroke="#292D32" 
stroke={!isActive ? '#04004D' : 'white'} // Outline color
strokeWidth="1.5" 
strokeLinecap="round" 
strokeLinejoin="round"
/>
</svg>
  );

export const SettingsIcon = ({ isActive }: { isActive?: boolean }) => (
<svg width="24" height="24" viewBox="0 0 24 24" 
// fill="none" 
fill={isActive ? 'none' : 'none'}
xmlns="http://www.w3.org/2000/svg">
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" 
// stroke="#292D32" 
stroke={!isActive ? '#04004D' : 'white'} // Outline color

strokeWidth="1.5" 
strokeMiterlimit="10" 
strokeLinecap="round" 
strokeLinejoin="round"
/>
<path d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z" 
// stroke="#292D32" 
stroke={!isActive ? '#04004D' : 'white'} // Outline color
strokeWidth="1.5" 
strokeMiterlimit="10" 
strokeLinecap="round" 
strokeLinejoin="round"
/>
</svg>
  );