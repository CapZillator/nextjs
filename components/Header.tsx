import Image from 'next/image'
import headerStyles from '../styles/Header.module.scss'

function Header() {
    const headerLinks = [{title: 'Home', link: '#'}, 
                        {title: 'World', link: '#'}, 
                        {title: 'Automobiles', link: '#'}, 
                        {title: 'Real Estate', link: '#'},
                        {title: 'Finance', link: '#'}];
    const headerLinksBlock = headerLinks.map(link => {
        return <li key={link.title}><a href={link.link}>{link.title}</a></li>;
    });
    return (
        <header className={headerStyles.headerWrapper}>
            <div className={headerStyles.header}>
                <Image src="/logo.svg" alt="Main Logo" width={129} height={28} />
                <div className={headerStyles.headerMenuButton}>
                    <Image src="/burger-menu.svg" alt="Menu button" width={24} height={20}/>
                </div>
                <nav className={headerStyles.headerMenuLinks}>
                    <ul>{headerLinksBlock}</ul>
                </nav>
            </div>
        </header>
    )
}

export default Header