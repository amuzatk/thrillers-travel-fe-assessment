import React from 'react';
import {
    HomeIcon,
    UserIcon,
    GuarantorIcon,
    LoanIcon,
    DecisionIcon,
    SavingsIcon,
    LoanRequestIcon,
    WhiteListIcon,
    KarmaIcon,
    BriefCaseIcon,
    SavingsProductIcon,
    FeesChargesIcon,
    TransactionIcon,
    ServicesIcon,
    ServiceAccountIcon,
    SettlementIcon,
    ReportIcon,
    PreferenceIcon,
    FeesPricingIcon,
    AuditIcon,
    LogoutIcon,
    MessagingIcon,
  } from '../constants';
  
  export const DASHBOARD_LINKS = [
    {
      TITLE: 'Dashboard',
      // LINK: '/vendor/[vendorId]',
      LINK: '/dashboard',
      SLUG: 'dashboard',
      ISDASHBOARD: true,
      ICON: (isActive: boolean) => <HomeIcon isActive={isActive} />,
    },
    {
      TITLE: 'Users',
      // LINK: '/vendor/[vendorId]',
      LINK: '/dashboard/users',
      SLUG: 'users',
      ISCUSTOMER: true,
      ICON: (isActive: boolean) => <UserIcon isActive={isActive} />,
    },
    {
      TITLE: 'Guarantors',
      LINK: '/dashboard/guarantors',
      SLUG: 'guarantors',
      ISCUSTOMER: true,
      ICON: (isActive: boolean) => <GuarantorIcon isActive={isActive} />,
    },
    {
      TITLE: 'Loans',
      LINK: '/dashboard/loans',
      SLUG: 'loans',
      ISCUSTOMER: true,
      ICON: (isActive: boolean) => <LoanIcon isActive={isActive} />,
    },
    {
      TITLE: 'Decision Models',
      LINK: '/dashboard/decision-models',
      SLUG: 'decision-models',
      ISCUSTOMER: true,
      ICON: (isActive: boolean) => <DecisionIcon isActive={isActive} />,
    },
    {
      TITLE: 'Savings',
      LINK: '/dashboard/savings',
      SLUG: 'savings',
      ISCUSTOMER: true,
      ICON: (isActive: boolean) => <SavingsIcon isActive={isActive} />,
    },
    {
      TITLE: 'Loan Requests',
      LINK: '/dashboard/loan-requests',
      SLUG: 'loan-requests',
      ISCUSTOMER: true,
      ICON: (isActive: boolean) => <LoanRequestIcon isActive={isActive} />,
    },
    {
      TITLE: 'Whitelist',
      LINK: '/dashboard/whitelist',
      SLUG: 'whitelist',
      ISCUSTOMER: true,
      ICON: (isActive: boolean) => <WhiteListIcon isActive={isActive} />,
    },
    {
      TITLE: 'Karma',
      LINK: '/dashboard/karma',
      SLUG: 'karma',
      ISCUSTOMER: true,
      ICON: (isActive: boolean) => <KarmaIcon isActive={isActive} />,
    },
    {
      TITLE: 'Organization',
      LINK: '/dashboard/organization',
      SLUG: 'organization',
      ISBUSINESS: true,
      ICON: (isActive: boolean) => <BriefCaseIcon isActive={isActive} />,
    },
    {
      TITLE: 'Loan Products',
      LINK: '/dashboard/loan-products',
      SLUG: 'loan-products',
      ISBUSINESS: true,
      ICON: (isActive: boolean) => <LoanRequestIcon isActive={isActive} />,
    },
    {
      TITLE: 'Savings Products',
      LINK: '/dashboard/savings-products',
      SLUG: 'savings-products',
      ISBUSINESS: true,
      ICON: (isActive: boolean) => <SavingsProductIcon isActive={isActive} />,
    },
    {
      TITLE: 'Fees and Charges',
      LINK: '/dashboard/fees',
      SLUG: 'fees',
      ISBUSINESS: true,
      ICON: (isActive: boolean) => <FeesChargesIcon isActive={isActive} />,
    },
    {
      TITLE: 'Transactions',
      LINK: '/dashboard/transactions',
      SLUG: 'transactions',
      ISBUSINESS: true,
      ICON: (isActive: boolean) => <TransactionIcon isActive={isActive} />,
    },
    {
      TITLE: 'Services',
      LINK: '/dashboard/services',
      SLUG: 'services',
      ISBUSINESS: true,
      ICON: (isActive: boolean) => <ServicesIcon isActive={isActive} />,
    },
    {
      TITLE: 'Service Account',
      LINK: '/dashboard/service-account',
      SLUG: 'service-account',
      ISBUSINESS: true,
      ICON: (isActive: boolean) => <ServiceAccountIcon isActive={isActive} />,
    },  {
      TITLE: 'Settlements',
      LINK: '/dashboard/settlements',
      SLUG: 'settlements',
      ISBUSINESS: true,
      ICON: (isActive: boolean) => <SettlementIcon isActive={isActive} />,
    }, 
    {
      TITLE: 'Reports',
      LINK: '/dashboard/reports',
      SLUG: 'reports',
      ISBUSINESS: true,
      ICON: (isActive: boolean) => <ReportIcon isActive={isActive} />,
    },
    {
      TITLE: 'Preferences',
      LINK: '/dashboard/preferences',
      SLUG: 'preferences',
      ISSETTINGS: true,
      ICON: (isActive: boolean) => <PreferenceIcon isActive={isActive} />,
    },  {
      TITLE: 'Fees and Pricing',
      LINK: '/dashboard/pricing',
      SLUG: 'pricing',
      ISSETTINGS: true,
      ICON: (isActive: boolean) => <FeesPricingIcon isActive={isActive} />,
    },  
    {
      TITLE: 'Audit Logs',
      LINK: '/dashboard/audit-logs',
      SLUG: 'audit-logs',
      ISSETTINGS: true,
      ICON: (isActive: boolean) => <AuditIcon isActive={isActive} />,
    },
    {
      TITLE: 'Systems Messages',
      LINK: '/dashboard/systems-messages',
      SLUG: 'systems-messages',
      ISSETTINGS: true,
      ICON: (isActive: boolean) => <MessagingIcon isActive={isActive} />,
    },
    {
      TITLE: 'Logout',
      LINK: '/',
      SLUG: 'audit-logs',
      ISLOGOUT: true,
      ICON: (isActive: boolean) => <LogoutIcon isActive={isActive} />,
    },  
  ];
  
  