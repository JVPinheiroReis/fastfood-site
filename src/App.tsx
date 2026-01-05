import testSvg from '@/assets/icon.svg'
import Header from '@/components/Header'
import ImageFrame from '@/components/ImageFrame'

import './App.css'

export default function App() {
    return (
        <div>
            <Header />
            <h1 className="title">Fast Food Site Header</h1>
            <p>Aqui se vende: hamburger, batata frita...</p>
            <ImageFrame src={testSvg} alt="some test icon" />
        </div>
    )
}
