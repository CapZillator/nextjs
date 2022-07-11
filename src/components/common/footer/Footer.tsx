import React, { FunctionComponent } from 'react';

import Image from 'next/image';

import footerStyles from './styles.module.scss';


export const Footer: FunctionComponent = () => {

    const footerLinks = [{ title: 'About us', link: '#' },
    { title: 'Help', link: '#' },
    { title: 'Advertise', link: '#' },
    { title: 'Privacy Policy', link: '#' },
    { title: 'Terms of Service', link: '#' }];

    const footerLinksBlock = footerLinks.map(link => {
        return <li key={link.title}><a href={link.link}>{link.title}</a></li>;
    });

    return <footer className={footerStyles.footerWrapper}>
        <ul className={footerStyles.linksWrapper}>{footerLinksBlock}</ul>
        <div className={footerStyles.socialMediaWrapper}>
            <div className={footerStyles.socialMediaIconWrapper}>
                <a href="#"><Image src="/twitter.svg" alt="Our Twitter" width={35} height={28} /></a>
            </div>
            <div className={footerStyles.socialMediaIconWrapper}>
                <a href="#"><Image src="/facebook.svg" alt="Our Facebook" width={31} height={30} /></a>
            </div>
            <div className={footerStyles.socialMediaIconWrapper}>
                <a href="#"><Image src="/instagram.svg" alt="Our Instagram" width={27} height={28} /></a>
            </div>
        </div>
        <div className={footerStyles.copyrightWrapper}>
            {`© ${new Date().getFullYear()} Best News`}
        </div>
    </footer>;
};