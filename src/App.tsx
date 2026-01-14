import DeliverWays from '@/components/DeliverWays'
import Menu from '@/components/Menu'
import PageHeader from '@/components/PageHeader'
import Presentation from '@/components/Presentation'

import './App.css'

export default function App() {
    return (
        <div className="app-container">
            <PageHeader />
            <main>
                <h1 className="app-container__h1">Big Foods</h1>
                <section>
                    <Presentation />
                </section>
                <section>
                    <h2 className="app-container__h2">Veja nossos produtos</h2>
                    <Menu />
                </section>
                <section>
                    <h2 className="app-container__h2">Formas de entrega</h2>
                    <DeliverWays />
                </section>
            </main>
        </div>
    )
}
