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
      LINK: '/dashboard',
      SLUG: 'dashboard',
      ISDASHBOARD: true,
      ICON: (isActive: boolean) => <DashboardIcon isActive={isActive} />,
    },
    {
      TITLE: 'Accounts',
      LINK: '/dashboard/accounts',
      SLUG: 'accounts',
      // ISCUSTOMER: true,
      ISDASHBOARD: true,
      ICON: (isActive: boolean) => <AccountIcon isActive={isActive} />,
    },
    {
      TITLE: 'Transfers',
      LINK: '/dashboard/transfers',
      SLUG: 'transfers',
      // ISCUSTOMER: true,
      ISDASHBOARD: true,
      ICON: (isActive: boolean) => <TransferIcon isActive={isActive} />,
    },
    {
      TITLE: 'Transactions',
      LINK: '/dashboard/transactions',
      SLUG: 'transactions',
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
  
  