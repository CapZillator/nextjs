import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { Logo, MenuButton } from 'components/icons';

import styles from './styles.module.scss';

const HEADER_LINKS = [
  { title: 'Home', link: '#' },
  { title: 'World', link: '#' },
  { title: 'Automobiles', link: '#' },
  { title: 'Real Estate', link: '#' },
  { title: 'Finance', link: '#' },
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
