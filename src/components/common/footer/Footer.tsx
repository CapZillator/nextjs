import React, { FunctionComponent } from 'react';
import { Facebook, Twitter, Instagram } from 'components/icons';

import styles from './styles.module.scss';

const FOOTER_LINKS = [
  { title: 'About us', link: '#' },
  { title: 'Help', link: '#' },
  { title: 'Advertise', link: '#' },
  { title: 'Privacy Policy', link: '#' },
  { title: 'Terms of Service', link: '#' },
];

export const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <ul className={styles.links}>
          {FOOTER_LINKS.map((link) => {
            return (
              <li key={link.title}>
                <a href={link.link}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className={styles.socialMedia}>
          <a href="#">
            <Twitter className={styles.socialMediaIcon} />
          </a>
          <a href="#">
            <Facebook className={styles.socialMediaIcon} />
          </a>
          <a href="#">
            <Instagram className={styles.socialMediaIcon} />
          </a>
        </div>
        <div className={styles.copyright}>
          {`© ${new Date().getFullYear()} Best News`}
        </div>
      </div>
    </footer>
  );
};
