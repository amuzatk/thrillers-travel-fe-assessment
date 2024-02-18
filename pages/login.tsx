import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Pablo from '../public/assets/images/pablo-sign-in.webp';
import Logo from '../public/assets/logo/logo.webp';
import Image from 'next/image';
import styles from '../styles/pages/Login.module.scss';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const controls = useAnimation();

  useEffect(() => {
    // Animate the <h1> tag to come down from the top
    controls.start({ 
      x: 0, 
      opacity: 1, 
      transition: { duration: 1.8 } 
    });

    // Animate the <p> tag to slide in from the right
    controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1.8, delay: 0.1 },
    });
  }, [controls]);

  const handleLogin = () => {
    router.push('/dashboard');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <main className={styles.container}>
      <section className={styles.image}>
        <Image src={Logo} className={styles.logo} width={173.76} height={36} alt='Login Image' />
        <Image src={Pablo} className={styles.illustration} width={600} height={337.57} alt='Login Image' />
      </section>
      <section className={styles.login}>
        <Image src={Logo}  width={173.76} height={36} alt='Login Image' className={styles.mobile} />
        <section className={styles.info}>
          <div className={styles.texts}>
             <motion.h1 initial={{ x: -50, opacity: 0 }} animate={controls}>
              Welcome!
            </motion.h1>
            <motion.p initial={{ x: 50, opacity: 0 }} animate={controls}>
              Enter details to login.
            </motion.p>
          </div>
          <form action="" className={styles.form}>
            <input
            type='text'
              placeholder="Email"
              className={styles.email}
            />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={styles.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={styles.cont} onClick={handleTogglePassword}>
              {showPassword ? 'HIDE' : 'SHOW'}
            </span>
            <p>FORGOT PASSWORD?</p>

            <button type="button" onClick={handleLogin}>
              LOG IN
            </button>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Login;