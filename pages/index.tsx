import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/pages/Login.module.scss';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/dashboard');
  };

  return (
    <main className={styles.container}>
            <button type="button" onClick={handleLogin}>
              PROCEED TO DASHBOARD
            </button>
    </main>
  );
};

export default Login;