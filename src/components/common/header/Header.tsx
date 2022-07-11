import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import headerStyles from './styles.module.scss';

export const Header: FunctionComponent = () => {
  const headerLinks = [
    { title: 'Home', link: '#' },
    { title: 'World', link: '#' },
    { title: 'Automobiles', link: '#' },
    { title: 'Real Estate', link: '#' },
    { title: 'Finance', link: '#' },
  ];

  return (
    <header className={headerStyles.headerWrapper}>
      <div className={headerStyles.header}>
        <Image src="/logo.svg" alt="Main Logo" width={129} height={28} />

        <div className={headerStyles.headerMenuButton}>
          <Image
            src="/burger-menu.svg"
            alt="Menu button"
            width={24}
            height={20}
          />
        </div>

        <nav className={headerStyles.headerMenuLinks}>
          <ul>
            {headerLinks.map((link) => {
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
