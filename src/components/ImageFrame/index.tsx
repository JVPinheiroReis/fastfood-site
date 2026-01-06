import './index.css'

export default function ImageFrame({
    src,
    alt,
    desc,
}: {
    src: string
    alt: string
    desc: string
}) {
    return (
        <div className="frame-wrapper">
            <img className="frame-image" src={src} alt={alt} />
            <div className="frame-card">
                <p className="frame-description">{desc}</p>
            </div>
        </div>
    )
}
