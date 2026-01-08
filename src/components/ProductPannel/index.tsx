import burgerWithCheese from '@/assets/burger-with-cheese.jpg'
import burgerWithCheeseAndBacon from '@/assets/burger-with-cheese-and-bacon.jpg'
import frenchFriesAndBurger from '@/assets/french-fries-and-burger.jpg'
import milkshake from '@/assets/milkshake.jpg'

import ImageFrame from '@/components/ImageFrame'

import './index.css'

export default function ProductPannel() {
    return (
        <ul className="product-list">
            <li>
                <ImageFrame
                    src={burgerWithCheeseAndBacon}
                    alt="some test icon"
                    desc="Hambúrguer com queijo e bacon"
                />
            </li>
            <li>
                <ImageFrame
                    src={burgerWithCheese}
                    alt="some test icon"
                    desc="Hambúrguer com queijo"
                />
            </li>
            <li>
                <ImageFrame
                    src={frenchFriesAndBurger}
                    alt="some test icon"
                    desc="Porção de batatas fritas"
                />
            </li>
            <li>
                <ImageFrame
                    src={milkshake}
                    alt="some test icon"
                    desc="Milkshake"
                />
            </li>
        </ul>
    )
}
