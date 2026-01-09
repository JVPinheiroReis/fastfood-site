import deliverying from '@/assets/deliverying.svg'
import deliveryingShopSvg from '@/assets/deliverying-shop.svg'

import ImageCard from '../ImageCard'

import './index.css'

export default function DeliverWays() {
    return (
        <div className="deliver-ways">
            <ImageCard
                className="deliver-ways__image-card"
                src={deliveryingShopSvg}
                desc="Você pode visitar nossa loja."
                alt="deliverying-shop-svg"
            />
            <ImageCard
                className="deliver-ways__image-card"
                src={deliverying}
                desc="Fazemos entregas na sua casa."
                alt="deliverying-svg"
            />
        </div>
    )
}
