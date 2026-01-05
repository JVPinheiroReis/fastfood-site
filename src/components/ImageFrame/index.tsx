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
        <>
            <img className="frame-image" src={src} alt={alt} />
            <p className="frame-description">{desc}</p>
        </>
    )
}
