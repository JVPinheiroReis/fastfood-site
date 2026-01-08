import iconSvg from '@/assets/icon.svg'

import './index.css'

export default function Icon() {
    return (
        <div className="site-logo">
            <img className="site-logo__img" src={iconSvg} alt="icon" />
        </div>
    )
}
