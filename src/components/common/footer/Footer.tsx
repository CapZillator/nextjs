import React, { FunctionComponent } from 'react';
import { Twitter } from './svg/Twitter';
import { Facebook } from './svg/Facebook';
import { Instagram } from './svg/Instagram';

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
            <Twitter style={styles.socialMediaIcon} />
          </a>
          <a href="#">
            <Facebook style={styles.socialMediaIcon} />
          </a>
          <a href="#">
            <Instagram style={styles.socialMediaIcon} />
          </a>
        </div>
        <div className={styles.copyright}>
          {`© ${new Date().getFullYear()} Best News`}
        </div>
      </div>
    </footer>
  );
};
