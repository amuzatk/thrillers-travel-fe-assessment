import React from 'react';
import {
  DashboardIcon,
    TransactionIcon,
    AccountIcon,
    TransferIcon,
    SettingsIcon,

  } from '../constants';
  
  export const DASHBOARD_LINKS = [
    {
      TITLE: 'Dashboard',
      // LINK: '/vendor/[vendorId]',
      LINK: '/dashboard',
      SLUG: 'dashboard',
      ISDASHBOARD: true,
      ICON: (isActive: boolean) => <DashboardIcon isActive={isActive} />,
    },
    {
      TITLE: 'Accounts',
      LINK: '/dashboard/users',
      SLUG: 'users',
      // ISCUSTOMER: true,
      ISDASHBOARD: true,
      ICON: (isActive: boolean) => <AccountIcon isActive={isActive} />,
    },
    {
      TITLE: 'Transfers',
      LINK: '/dashboard/guarantors',
      SLUG: 'guarantors',
      // ISCUSTOMER: true,
      ISDASHBOARD: true,
      ICON: (isActive: boolean) => <TransferIcon isActive={isActive} />,
    },
    {
      TITLE: 'Transactions',
      LINK: '/dashboard/loans',
      SLUG: 'loans',
      // ISCUSTOMER: true,
      ISDASHBOARD: true,
      ICON: (isActive: boolean) => <TransactionIcon isActive={isActive} />,
    },
    {
      TITLE: 'Settings',
      LINK: '/dashboard/settings',
      SLUG: 'settings',
      ISDASHBOARD: true,
      // ISSETTINGS: true,
      ICON: (isActive: boolean) => <SettingsIcon isActive={isActive} />,
    },
  ];
  
  