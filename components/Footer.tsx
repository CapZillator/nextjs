import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import footerStyles from '../styles/Footer.module.scss'


const Footer = () => {

    const footerLinks = [{title: 'About us', link: '#'}, 
                        {title: 'Help', link: '#'}, 
                        {title: 'Advertise', link: '#'}, 
                        {title: 'Privacy Policy', link: '#'},
                        {title: 'Terms of Service', link: '#'}];
    const footerLinksBlock = footerLinks.map(link => {
        return <li key={link.title}><a href={link.link}>{link.title}</a></li>;
    });
    const copyright = `© ${new Date().getFullYear()} Best News`;
    return (
        <footer className={footerStyles.footerWrapper}>
            <ul className={footerStyles.linksWrapper}>{footerLinksBlock}</ul>
            <div className={footerStyles.socialMediaWrapper}>
                <a href="#"><Image src="/twitter.svg" alt="Our Twitter" width={35} height={28} /></a>
                <a href="#"><Image src="/facebook.svg" alt="Our Facebook" width={31} height={30} /></a>
                <a href="#"><Image src="/instagram.svg" alt="Our Instagram" width={27} height={28} /></a>
            </div>
            <div className={footerStyles.copyrightWrapper}>{copyright}</div>
        </footer>
    )
}

export default Footer