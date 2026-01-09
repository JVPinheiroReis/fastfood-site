import './index.css'

export default function NavMenu() {
    return (
        <nav>
            <ul className="nav-menu">
                <li>
                    <a className="nav-menu__a" href="/about">
                        Sobre
                    </a>
                </li>
                <li>
                    <a className="nav-menu__a" href="/contacts">
                        Contato
                    </a>
                </li>
            </ul>
        </nav>
    )
}
