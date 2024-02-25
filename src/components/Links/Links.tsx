'use client';

import { useState } from 'react';
import styles from './styles.module.css';
import NavLink from '../NavLink/NavLink';
import Image from 'next/image';

export interface LinkType {
  title: string;
  path: '/' | '/about' | '/contact' | '/blog' | '/login' | '/admin';
}

const Links = () => {
  const [open, setOpen] = useState<boolean>(false);

  const links: LinkType[] = [
    {
      title: 'Homepage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(link => (
          <NavLink key={link.path} link={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink link={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink link={{ title: 'Login', path: '/login' }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="Menu icon"
        width={30}
        height={30}
        className={styles.menuButton}
        onClick={() => setOpen(prev => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map(link => (
            <NavLink link={link} key={link.path} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
