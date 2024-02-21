'use client';

import Link from 'next/link';
import { LinkType } from '../Links/Links';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';

interface NavLinkProps {
  link: LinkType;
}

const NavLink = ({ link }: NavLinkProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={link.path}
      key={link.path}
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
