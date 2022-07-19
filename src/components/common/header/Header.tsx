import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { Logo, MenuButton } from 'components/icons';

import styles from './styles.module.scss';

const HEADER_LINKS = [
  { title: 'Home', link: '/' },
  { title: 'Business', link: '/business' },
  { title: 'Technology', link: '/technology' },
  { title: 'US', link: '/us' },
  { title: 'Arts', link: '/arts' },
];

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <div className={styles.menuButton}>
          <MenuButton />
        </div>

        <ul className={styles.menuLinks}>
          {HEADER_LINKS.map((link) => {
            return (
              <li key={link.title}>
                <a href={link.link}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};
