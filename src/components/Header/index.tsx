import Contacts from '@/components/Contacts'
import Icon from '@/components/Icon'
import Navbar from '@/components/Navbar'

import './index.css'

export default function Header() {
    return (
        <header className="page-header">
            <div className="page-header__branding">
                <Icon />
                <Contacts />
            </div>
            <Navbar />
        </header>
    )
}
