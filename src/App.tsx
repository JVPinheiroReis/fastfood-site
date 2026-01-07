import Header from '@/components/Header'
import ProductPannel from '@/components/ProductPannel'

import './App.css'

export default function App() {
    return (
        <div className="main">
            <Header />
            <h1>Big Foods</h1>
            <h2>Veja nossos produtos</h2>
            <ProductPannel />
        </div>
    )
}
