import Contacts from '@/components/Contacts'
import Icon from '@/components/Icon'
import Navbar from '@/components/Navbar'

import './index.css'

export default function Header() {
    return (
        <header className="header">
            <div className="header-info">
                <Icon />
                <Contacts />
            </div>
            <Navbar />
        </header>
    )
}
