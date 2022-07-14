import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import header from './styles.module.scss';

const HEADER_LINKS = [
  { title: 'Home', link: '#' },
  { title: 'World', link: '#' },
  { title: 'Automobiles', link: '#' },
  { title: 'Real Estate', link: '#' },
  { title: 'Finance', link: '#' },
];

export const Header: FunctionComponent = () => {
  return (
    <header className={header.header}>
      <div className={header.content}>
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="Main Logo" width={129} height={28} />
          </a>
        </Link>

        <div className={header.menuButton}>
          <Image
            src="/burger-menu.svg"
            alt="Menu button"
            width={24}
            height={20}
          />
        </div>

        <nav className={header.menuLinks}>
          <ul>
            {HEADER_LINKS.map((link) => {
              return (
                <li key={link.title}>
                  <a href={link.link}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
